import "./Authentication.scss";
import LoginForm from "../../components/LoginForm";
import SignupForm from "../../components/SignupForm";
import AnimatedBackground from "../../components/AnimatedBackground/AnimatedBackground";
import { useSearchParams } from "react-router-dom";

const Authentication = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");

  return (
    <div className="form flex-center full-h">
      <AnimatedBackground />
      {mode === "signup" ? <SignupForm /> : <LoginForm />}
    </div>
  );
};

export default Authentication;
