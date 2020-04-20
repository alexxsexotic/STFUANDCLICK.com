import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import randomstring from 'randomstring';
import { Basic as Layout } from '../layouts/Basic';
import { Leaderboard } from '../components/shared/Leaderboard';
import { Game } from '../components/clickgame/Game';
import User from '../models/User';
import Team from '../models/Team';
import api from '../utils/api';
import debounce from '../utils/debounce';

export const ClickGame: React.FC<{ match: { params: { team: string } } }> = ({
  match: {
    params: { team },
  },
}) => {
  const [data, setData] = useState<Team[]>([]);
  const dispatch = useDispatch();
  const session = useSelector((state: { user: User }) => state.user.session);

  async function fetchLeaderboard() {
    try {
      const { data } = await api({
        endpoint: 'leaderboard',
      });
      setData(data);
    } catch (err) {
      console.log(err);
    }
    return;
  }

  // When the user updates their click score, we update the ui for the leaderboard
  // but to optimise rendering we use a debouncer to update the leaderboard less frequently

  const debounceFetch = useCallback(
    debounce(() => {
      fetchLeaderboard();
    }, 200),
    []
  );

  useEffect(() => {
    function setSession() {
      return dispatch({
        type: 'SET_SESSION',
        payload: randomstring.generate(7),
      });
    }
    setSession();
    fetchLeaderboard();
  }, []);

  return (
    <Layout>
      <Game team={team} session={session} onChange={debounceFetch} />
      <Leaderboard data={data} team={team} />
    </Layout>
  );
};
