import "../assets/partials/_form.scss";
import { Link, useNavigate } from "react-router-dom";
import { fetchRegister, fetchToken } from "../api/api";
import { useFormik } from "formik";
import validationSchema from "../schemas/validation";
import { useSignIn } from "react-auth-kit";
import { useState } from "react";

const SignupForm = (): JSX.Element => {
  const signIn = useSignIn();
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
      },
      validationSchema,
      onSubmit: async (values) => {
        try {
          const response = await fetchRegister(values);
          if (response.status === 201) {
            const token = await fetchToken({
              email: response.data.email,
              password: values.password,
            });
            signIn({
              token,
              expiresIn: 3600,
              tokenType: "Bearer",
              authState: { email: response.data.email },
            });
            navigate("/");
          }
        } catch (error: any) {
          const err = Object.values(error.response.data).map(
            (value: unknown) => String(value) + "\n",
          );
          setError(String(err));
        }
      },
    });

  return (
    <form
      className="p-3 form-box blur"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h2 className="form-heading text-center">Signup Form</h2>
      <div
        className={
          errors.name != null && touched.name != null
            ? "form-controls form-controls-error"
            : "form-controls"
        }
      >
        {error !== "" ? <p className="form-error">{error}</p> : ""}
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          onChange={handleChange}
          value={values.name}
          onBlur={handleBlur}
        />
        {errors.name != null && touched.name != null ? (
          <span className="form-error">{errors.name}</span>
        ) : (
          ""
        )}
      </div>
      <div
        className={
          errors.email != null && touched.email != null
            ? "form-controls form-controls-error"
            : "form-controls"
        }
      >
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
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
      <div
        className={
          errors.confirmpassword != null && touched.confirmpassword != null
            ? "form-controls form-controls-error"
            : "form-controls"
        }
      >
        <label htmlFor="confirmpassword" className="form-label">
          Password Again
        </label>
        <input
          type="password"
          className="form-input"
          name="confirmpassword"
          id="confirmpassword"
          onChange={handleChange}
          value={values.confirmpassword}
          onBlur={handleBlur}
        />
        {errors.confirmpassword != null && touched.confirmpassword != null ? (
          <span className="form-error">{errors.confirmpassword}</span>
        ) : (
          ""
        )}
      </div>
      <button className="form-submit" type="submit">
        Signup
      </button>
      <p className="helper mt-1">
        Do you have an account?<Link to="?mode=signin">Login</Link>
      </p>
    </form>
  );
};

export default SignupForm;
