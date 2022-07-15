import { object, string, ref } from "yup";

export const createUserSchema = object({
    body: object({
    name: string().required("Name is required"),
    password: string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum.")
      .matches(/([a-zA-Z0-9_\s@!#$%^&*])\w+/, "Password must user numbers and letters only"),
     email: string().email("Must be a valid email").required("Email is required"),
  }),
});

export const signupSessionSchema = object({
  body: object({
    password: string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum.")
      .matches(/([a-zA-Z0-9_\s@!#$%^&*])\w+/, "Password can only contain Latin letters."),

    email: string()
      .email("Must be a valid email")
      .required("Email is required"),
  }),
});
