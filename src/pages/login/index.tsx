import facebookIcon from '../../assets/img/facebook.svg'
import FacebookLoginAuth from '../../components/shared/facebookLoginAuth';
import LoginWithGoogle from '../../components/shared/loginWithGoogle';

import styles from "./login.module.scss";

export default function Login(): JSX.Element {

    return (
        <div>
            <div className={styles.a}>
                <div className={styles.background}>
                    <div className={styles.shape}></div>
                    <div className={styles.shape}></div>
                </div>
                <form className={styles.formClass}>
                    <h3>Login</h3>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Email or Phone" id="username" />
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" id="password" />
                    <button type='button' className={styles.login}>Log In</button>
                    <div className={styles.social}>
                        <div className={styles.go}>
                            <LoginWithGoogle />
                        </div>
                        <div className={styles.fb}>
                            <img src={facebookIcon} alt="" width={30} height={30} />
                            <FacebookLoginAuth />
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}
