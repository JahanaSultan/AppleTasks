import * as yup from "yup";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_-])(?=.{6,})/;

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must contain 6 character")
    .required("Password is required")
    .matches(
      passwordRegex,
      "Password must contain at least 1 uppercase, 1 lowercase, 1 number and 1 special case character",
    ),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password does not match")
    .required("Password confirm is required"),
});

export default validationSchema;

export const validationSchema2 = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});
