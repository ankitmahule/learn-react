import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import "../css/forms.scss";

const Register = () => {
  const { user, setUser } = useContext(UserContext);
  const [isSignupSucces, setIsSignupSuccess] = useState(false);
  return (
    <div className="form-container">
      <div className="login-text">
        <h1 className="text-3xl font-bold">
          Login if you have signed up already
        </h1>
        <h2 className="text-4xl font-bold">OR</h2>
        <Link to="/login">Sign In Here</Link>
      </div>
      <div className="divider"></div>

      <div className="login-form">
        {isSignupSucces && (
          <h4 className="success-text">
            User Registration Successful. Please &nbsp;
            <Link to="/login">Sign In Here</Link>
          </h4>
        )}
        <Formik
          initialValues={{ email: "", password: "", contactno: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) errors.email = "This field is required";
            else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            )
              errors.email = "Invalid email address";

            if (!values.password) errors.password = "This field is required";
            else if (values.password.length < 8)
              errors.password = "Minimum length of password should be >= 8";

            if (!values.contactno) errors.contactno = "This field is required";
            else if (!/^[0-9]{10}$/.test(values.contactno))
              errors.contactno =
                "Contact no. should be of 10 digits only and a number";
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setUser({
              ...user,
              email: values.email,
              password: values.password,
              contactNo: values.contactno,
            });
            setIsSignupSuccess(true);
            resetForm();
            setSubmitting(false);
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
                <Field
                  type="text"
                  name="contactno"
                  placeholder="Enter Contact No."
                  autoComplete="off"
                  patter="[0-9]+"
                />
                <ErrorMessage
                  className="error-text"
                  name="contactno"
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
export default Register;
