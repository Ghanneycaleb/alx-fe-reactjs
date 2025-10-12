import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../index.css";


// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function FormikForm() {
  return (
    <div className="form-container">
      <h2>User Registration (Formik)</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form data:", values);
          alert("Registration successful!");
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form-body">
            <div className="form-group">
              <Field type="text" name="username" placeholder="Username" className="form-input" />
              <ErrorMessage name="username" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <Field type="email" name="email" placeholder="Email" className="form-input" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <Field type="password" name="password" placeholder="Password" className="form-input" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <button type="submit" className="form-button" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
