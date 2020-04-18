import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useHistory } from "react-router-dom";

export const Teamform: React.FC = () => {
  const [form, setForm] = useState<string>("");
  const history = useHistory();

  function handleInput(event: React.ChangeEvent<HTMLInputElement>): void {
    setForm(event.target.value);
    return;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    history.push(`/${form}`);
    return;
  }

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <input
          required
          placeholder="Your team name"
          value={form}
          onChange={handleInput}
        />
        <button disabled={form === ""} type="submit">
          PLAY
        </button>
      </form>
    </div>
  );
};
