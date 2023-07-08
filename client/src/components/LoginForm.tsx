import "../assets/partials/_form.scss";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { validationSchema2 } from "../schemas/validation";
import { fetchMe, fetchToken } from "../api/api";
import { useSignIn } from "react-auth-kit";
import { useState } from "react";

const LoginForm = (): JSX.Element => {
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const signIn = useSignIn();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: validationSchema2,
      onSubmit: async (values) => {
        try {
          const response = await fetchToken(values);
          if (response != null) {
            const me = await fetchMe(response);
            signIn({
              token: response,
              expiresIn: 3600,
              tokenType: "Bearer",
              authState: { email: me.email, name: me.name },
            });
            navigate("/");
          }
        } catch (error: any) {
          setError("Email or password is incorrect");
        }
      },
    });

  return (
    <form
      className="p-3 form-box blur"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h2 className="form-heading text-center">Login Form</h2>
      <div
        className={
          errors.email != null && touched.email != null
            ? "form-controls form-controls-error"
            : "form-controls"
        }
      >
        {error != "" ? <span className="form-error">{error}</span> : ""}
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-input"
          name="email"
          id="email"
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
        />
        {errors.email != null && touched.email != null ? (
          <span className="form-error">{errors.email}</span>
        ) : (
          ""
        )}
      </div>
      <div
        className={
          errors.password != null && touched.password != null
            ? "form-controls form-controls-error"
            : "form-controls"
        }
      >
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-input"
          name="password"
          id="password"
          onChange={handleChange}
          value={values.password}
          onBlur={handleBlur}
        />
        {errors.password != null && touched.password != null ? (
          <span className="form-error">{errors.password}</span>
        ) : (
          ""
        )}
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
