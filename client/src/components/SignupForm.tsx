import "../assets/partials/_form.scss";

const SignupForm = (): JSX.Element => {
  return (
    <>
      <h2 className="form-heading text-center">Signup Form</h2>
      <div className="form-controls">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" className="form-input" name="name" id="name" />
        <span className="form-error">Please enter a username</span>
      </div>
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
      <div className="form-controls">
        <label htmlFor="confirmpassword" className="form-label">
          Password Again
        </label>
        <input
          type="password"
          className="form-input"
          name="confirmpassword"
          id="confirmpassword"
        />
        <span className="form-error">Please enter a password</span>
      </div>
      <p className="helper mt-1">
        Do you have an account? <a href="/login">Login</a>
      </p>
    </>
  );
};

export default SignupForm;
