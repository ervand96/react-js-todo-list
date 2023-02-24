import { Button, Form, Input } from "antd";
import facebookIcon from "../../assets/img/facebook.svg";
import FacebookLoginAuth from "../../components/shared/facebookLoginAuth";
import LoginWithGoogle from "../../components/shared/loginWithGoogle";

import styles from "./login.module.scss";

export default function Login(): JSX.Element {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const { email, password } = form.getFieldsValue();
  };

  return (
    <div>
      <div className={styles.a}>
        <div className={styles.background}>
          <div className={styles.shape}></div>
          <div className={styles.shape}></div>
        </div>
        <Form className={styles.formClass} onFinish={onFinish} form={form}>
          <h3>Login</h3>
          <div className={styles.emailSec}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className={styles.emailSec}>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input type="password" />
            </Form.Item>
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.login}>
              Login
            </Button>
          </Form.Item>
          <div className={styles.social}>
            <div className={styles.go}>
              <LoginWithGoogle />
            </div>
            <div className={styles.fb}>
              <img src={facebookIcon} alt="" width={30} height={30} />
              <FacebookLoginAuth />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
