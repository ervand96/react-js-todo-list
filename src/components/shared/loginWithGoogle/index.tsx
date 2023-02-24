import GoogleLogin from "react-google-login";

const LoginWithGoogle = (): JSX.Element => {
  const onFailure = (res: any) => {
    // TODO add functionality
    console.log("[Login Failed] res:", res);
  };

  const handleLogin = (googleData: any) => {
    // TODO add functionality
    console.log(googleData);
  };

  return (
    <GoogleLogin
      clientId="543419241505-su7j7fe9crrtircjqhm8mlgomcgmjrta.apps.googleusercontent.com"
      redirectUri="/intro"
      onSuccess={handleLogin}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
      buttonText="Login with Google"
    />
  );
};

export default LoginWithGoogle;
