import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/forms.scss";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [isLoginError, setIsLoginError] = useState(false);
  return (
    <div className="form-container">
      <div className="login-text">
        <h1 className="text-3xl font-bold">
          Login if you have signed up already
        </h1>
        <h2 className="text-4xl font-bold">OR</h2>
        <Link to="/register">Sign Up Here</Link>
      </div>
      <div className="divider"></div>
      <div className="login-form">
        {isLoginError && (
          <h4 className="error-text">
            Incorrect Login, Please Check User Email or Password
          </h4>
        )}
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "This field is required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "This field is required";
            } else if (values.password.length < 8) {
              errors.password = "Minimum lenght of password should be >= 8";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            if (
              values?.email !== user?.email ||
              values?.password !== user?.password
            ) {
              setIsLoginError(true);
              return;
            }
            setIsLoginError(false);
            setUser({
              ...user,
              isUserLoggedIn: true,
            });
            navigate("/");
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-field">
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  autoComplete="off"
                />

                <ErrorMessage
                  className="error-text"
                  name="email"
                  component="div"
                />
              </div>
              <div className="form-field">
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  autoComplete="off"
                />
                <ErrorMessage
                  className="error-text"
                  name="password"
                  component="div"
                />
              </div>
              <div className="form-field">
                <button className="btn" type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Login;
