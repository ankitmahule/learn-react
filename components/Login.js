import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form-container">
      <div className="login-text">
        <h1>Login if you have signed up already</h1>
        <h2>OR</h2>
        <Link to="/register">
          <h4>Sign Up Here</h4>
        </Link>
      </div>
      <div className="divider"></div>
      <div className="login-form">
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
            window.location.href = "/";
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
