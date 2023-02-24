import styles from "./home.module.scss";

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <a href="https://zesty-concha-35bbe8.netlify.app/" target="_blank">
        <button className={styles.glowOnHover}>Open chat</button>
      </a>
    </div>
  );
}
