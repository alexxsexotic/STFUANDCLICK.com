import React, { useState, useRef } from "react";
import styles from "./styles.module.scss";
import api from "../../utils/api";

interface GameProps {
  team: string;
  session: string;
  onChange: () => void;
}

export const Game: React.FC<GameProps> = ({ team, session, onChange }) => {
  const [count, setCount] = useState<{
    your_clicks: number;
    team_clicks: number;
  }>({
    your_clicks: 0,
    team_clicks: 0,
  });
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleClick() {
    try {
      const { data } = await api({
        method: "post",
        endpoint: "klik",
        data: { team, session },
      });
      setCount((state) => ({ ...state, ...data }));
      onChange();
    } catch (err) {
      console.log(err);
    }
    return;
  }

  function handleCopy(): void {
    inputRef.current?.select();
    document.execCommand("copy");
    alert("Link copied");
  }

  return (
    <>
      <header className={`${styles.header} al-t-center`}>
        <h2>Team {team}</h2>
        <div>
          <p>Too lazy to click? Share this link:</p>
          <input
            ref={inputRef}
            value={window.location.href}
            onClick={handleCopy}
          />
        </div>
      </header>
      <div className="flex flex-column al-i-center">
        <button className={styles.button} onClick={handleClick}>
          CLICK
        </button>
        <div className={`${styles.stats} flex`}>
          <div className="flex flex-column al-i-center">
            <span>YOUR CLICKS</span>
            <strong>{count.your_clicks}</strong>
          </div>
          <div className="flex flex-column al-i-center">
            <span>TEAM CLICK</span>
            <strong>{count.team_clicks}</strong>
          </div>
        </div>
      </div>
    </>
  );
};
