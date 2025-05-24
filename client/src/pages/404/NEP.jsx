import { useNavigate } from "react-router-dom";
import styles from "./NEP.module.css";

export default function NEP() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>Oops! Page not found.</p>

        <img
          src="https://media.giphy.com/media/3o6ZtaO9BZHcOjmErm/giphy.gif"
          alt="Lost box"
          className={styles.gif}
        />

        <button className={styles.button} onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    </div>
  );
}
