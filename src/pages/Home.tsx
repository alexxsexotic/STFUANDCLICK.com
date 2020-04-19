import React, { useEffect, useState } from 'react';
import { Basic as Layout } from '../layouts/Basic';
import { Header } from '../components/home/Header';
import { Leaderboard } from '../components/shared/Leaderboard';
import api from '../utils/api';

export const Home: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
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
    fetchLeaderboard();
  }, []);

  return (
    <Layout>
      <Header />
      <Leaderboard data={data} />
    </Layout>
  );
};
