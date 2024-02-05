import { useFormik } from "formik";
import { signUpSchema } from "../../schemas/Index";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

function Signup() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  console.log(errors);
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between items-center p-10 overflow-hidden ">
        <div>
          <h1 className="text-4xl text-blue-700 font-semibold">
            <strong>JOB</strong>SEARCH
          </h1>
        </div>
        <div className="flex gap-5 ">
          <h1
            className=" text-black hover:bg-blue-600 hover:text-white  cursor-pointer text-lg font-semibold  p-1"
            onClick={() => navigate("/")}
          >
            Home
          </h1>
        </div>
      </div>
      <div className="flex flex-col  items-center  mt-14  sm:justify-center sm:pt-0 ">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold  text-gray-900">Sign UP</h3>
          </a>
        </div>
        <div className=" w-full px-6 py-4  mt-6 overflow-hidden bg-slate-300 shadow-md sm:max-w-md sm:rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className=" ">
              <label
                htmlFor="name"
                className="block text-sm  font-medium text-gray-700 undefined"
              >
                Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="name"
                  autoComplete="off"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="block py-1 w-full px-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.name && touched.name ? (
                  <p className="text-red-600">{errors.name}</p>
                ) : null}
              </div>
            </div>
            <div className=" ">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-startl">
                <input
                  type="email"
                  autoComplete="off"
                  name="email"
                  id="email"
                  className="block py-1 px-2 w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="text-red-600">{errors.email}</p>
                ) : null}
              </div>
            </div>

            <div className=" ">
              <label
                htmlFor="password "
                className="block px-2 text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  autoComplete="off"
                  name="password"
                  id="password"
                  className="block py-1 px-2 w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="text-red-600">{errors.password}</p>
                ) : null}
              </div>
            </div>
            <div className="">
              <label
                htmlFor="confirm_password"
                className="block text-sm  font-medium text-gray-700 undefined"
              >
                Confirm Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  autoComplete="off"
                  name="confirm_password"
                  id="confirm_password"
                  className="block py-1 w-full px-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirm_password && touched.confirm_password ? (
                  <p className="text-red-600">{errors.confirm_password}</p>
                ) : null}
              </div>
            </div>
          
          <div className="flex items-center justify-end mt-4">
            <a
              className="text-sm text-gray-600 underline hover:text-gray-900 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Already registered?
            </a>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 ml-4 text-xs cursor-pointer font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
            >
              Register
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
