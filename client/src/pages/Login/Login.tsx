import "./Login.scss";
import LoginForm from "../../components/LoginForm";
import AnimatedBackground from "../../components/AnimatedBackground/AnimatedBackground";
import { useMatch } from "react-router-dom";
import SignupForm from "../../components/SignupForm";

const Login = (): JSX.Element => {
  const isSignup = useMatch("/signup");
  console.log(isSignup);

  return (
    <div className="form flex-center full-h">
      <AnimatedBackground />
      <div className="p-3 form-box blur">
        {isSignup != null ? <SignupForm /> : <LoginForm />}
      </div>
    </div>
  );
};

export default Login;
