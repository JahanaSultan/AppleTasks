import "../assets/partials/_form.scss";
import { Link } from "react-router-dom";

const LoginForm = (): JSX.Element => {
  return (
    <form className="p-3 form-box blur">
      <h2 className="form-heading text-center">Login Form</h2>
      <div className="form-controls">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-input"
          name="username"
          id="username"
        />
        <span className="form-error">Please enter a username</span>
      </div>
      <div className="form-controls">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-input"
          name="password"
          id="password"
        />
        <span className="form-error">Please enter a password</span>
      </div>
      <button className="form-submit" type="submit">
        Login
      </button>
      <p className="helper mt-1">
        Don't have an account? <Link to="?mode=signup">Signin</Link>
      </p>
    </form>
  );
};

export default LoginForm;
