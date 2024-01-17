import { Button, Form, Input } from "antd";
import facebookIcon from "../../assets/img/facebook.svg";
import FacebookLoginAuth from "../../components/shared/facebookLoginAuth";
import LoginWithGoogle from "../../components/shared/loginWithGoogle";

import styles from "./login.module.scss";

export default function Login(): JSX.Element {
  const [form] = Form.useForm();

  const onFinish = async (): Promise<void>  => {
    const { email, password } = form.getFieldsValue();
    
    try {
    const registrationData = {
      email: email,
      password: password,
    };

  const res = await fetch('http://localhost:4000/login', {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registrationData),
    })
    
    console.log(res);
    
  } catch(err) {
    console.log('Error: ', err);
  }
}

  return (
    <div>
      <div className={styles.a}>
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
