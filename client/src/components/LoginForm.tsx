import "../assets/partials/_form.scss";

const LoginForm = (): JSX.Element => {
  return (
    <>
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
      <p className="helper mt-1">
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </>
  );
};

export default LoginForm;
