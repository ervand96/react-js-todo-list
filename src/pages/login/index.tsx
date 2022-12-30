import styles from "./login.module.scss";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>
      <form>
        <h3>Login Here</h3>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <button>Log In</button>
        <div className={styles.social}>

          <div className={styles.go}>
            <i className={styles["fab fa-google"]}></i> Google
          </div>
          <div className={styles.fb}>
            <i className={styles["fab fa-facebook"]}></i> Facebook
          </div>
        </div>
      </form>
    </div>
  );
}
