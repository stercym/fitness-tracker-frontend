import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ProfileValidationSchema = Yup.object().shape({
  // Name minimum length validation
  name: Yup.string()
    .min(2, 'Name is too short!')
    .required('Name is required'),
  
  // email validation 
  email: Yup.string()
    .email('Invalid email address format')
    .required('Email is required'),

  // password length validation
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),

  // goal selection validation
  goal: Yup.string()
    .required('Please select a fitness goal'),
});


function Profile() {
  const [message, setMessage] = useState(null); 

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setMessage(null);
    try {
      console.log("Submitting to API:", values);
      const res = await fetch("https://fitness-tracker-api-pb2t.onrender.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage({ text: data.error || "Failed to create user", type: "error" });
      } else {
        setMessage({ text: "User registered successfully!", type: "success" });
        resetForm(); 
      }
    } catch (err) {
      setMessage({ text: "An error occurred. Please try again later.", type: "error" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="app-heading">WELCOME TO YOUR FITNESS TRACKER</h1>
      <div className="form-container">
        <h2 className="form-title">REGISTER HERE</h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            goal: "",
          }}
          validationSchema={ProfileValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name:</label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="form-input"
                  placeholder="Enter First name and Last name"
                />
                <ErrorMessage name="name" component="div" className="error-message" />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email:</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="form-input"
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">Password:</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="form-input"
                  placeholder="Enter your password"
                />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>

              <div className="form-group">
                <label htmlFor="goal" className="form-label">Fitness Goal:</label>
                <Field
                  as="select"
                  name="goal"
                  id="goal"
                  className="form-select"
                >
                  <option value="">-- Select Goal --</option>
                  <option value="Lose Weight">Lose Weight</option>
                  <option value="Gain Muscle">Gain Muscle</option>
                  <option value="Add Weight">Add Weight</option>
                  <option value="Stay Fit">Stay Fit</option>
                  <option value="Grow Glutes">Grow Glutes</option>
                </Field>
                <ErrorMessage name="goal" component="div" className="error-message" />
              </div>

              <button type="submit" className="form-button" disabled={isSubmitting}>
                {isSubmitting ? "Registering..." : "Register"}
              </button>
            </Form>
          )}
        </Formik>
        {message && <p className={`form-message ${message.type}`}>{message.text}</p>}
      </div>
    </div>
  );
}

export default Profile;

