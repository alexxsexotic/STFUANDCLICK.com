import React, { useState } from 'react';
import styles from './styles.module.scss';
import Team from '../../models/Team';

interface LeaderboardProps {
  data: Team[];
  team?: string;
}

// Leaderboard has two interfaces, one for the homepage which shows all the teams
// and another one for the invidual player limited for only near teams around his position
// To change the interface pass the team name as a prop

export const Leaderboard: React.FC<LeaderboardProps> = ({ data, team }) => {
  const [limit, setLimit] = useState(20);
  const index = data.findIndex((item) => item.team === team);
  const filteredData =
    index !== -1
      ? data.slice(index - 3 < 0 ? 0 : index - 3, index + 4)
      : data.slice(0, limit);
  const isFull = limit > data.length;

  function handleLoad(): void {
    setLimit((state) => state + 20);
    return;
  }

  if (!data.length) return <h3 className="al-t-center">loading...</h3>;

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <td></td>
            <td>TEAM</td>
            <td>CLICKS</td>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr
              key={item.order}
              className={item.order === index + 1 ? styles.active : ''}
            >
              <td>{item.order}</td>
              <td>{item.team}</td>
              <td>{item.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex j-c-center">
        {!isFull && !team && (
          <button className={styles.button} onClick={handleLoad}>
            Load more
          </button>
        )}
      </div>
    </>
  );
};
