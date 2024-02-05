import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
    JobTittle:Yup.string().min(2).max(25).required("Please enter your Jobt ittle"),
    CompanyName:Yup.string().min(2).max(25).required("Please enter your Company Name"),
    CompanyLink:Yup.string().min(2).max(25).required("Please enter your Company Link"),
    JobLink:Yup.string().min(2).max(25).required("Please enter your Job link"),
    JobDescription:Yup.string().min(15).max(25).required("Please enter your Job decription")
});