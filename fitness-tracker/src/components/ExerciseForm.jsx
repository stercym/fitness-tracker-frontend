import React from "react";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./forms.css";

function ExerciseForm({ onExerciseCreated }) {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("https://fitness-tracker-api-pb2t.onrender.com/goals")
      .then((res) => res.json())
      .then(setGoals)
      .catch((err) => console.error("Failed to fetch goals:", err));
  }, []);

  const validationSchema = Yup.object({
    exercise_name: Yup.string()
      .min(3, "Exercise name must be at least 3 characters")
      .matches(/^[A-Za-z\s]+$/, "Exercise name must only contain letters and spaces") 
      .required("Exercise name is required"),

    goal_id: Yup.number()
      .typeError("Please select a valid goal") 
      .required("Goal selection is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newExercise = {
      exercise_name: values.exercise_name,
      goal_id: parseInt(values.goal_id),
    };

    fetch("https://fitness-tracker-api-pb2t.onrender.com/exercises", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newExercise),
    })
      .then((res) => res.json())
      .then((data) => {
        onExerciseCreated(data);
        resetForm();
      })
      .catch((err) => console.error("Failed to create exercise:", err));
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={{ exercise_name: "", goal_id: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="form">
            <h2 className="form-title">Add New Exercise</h2>

            {/* Exercise Name */}
            <div className="form-group">
              <label className="form-label">Exercise Name</label>
              <Field
                type="text"
                name="exercise_name"
                className="form-input"
                placeholder="Enter exercise name"
              />
              <ErrorMessage
                name="exercise_name"
                component="div"
                className="form-error"
              />
            </div>

            {/* Associated Goal */}
            <div className="form-group">
              <label className="form-label">Associated Goal</label>
              <Field as="select" name="goal_id" className="form-select">
                <option value="">Select a goal</option>
                {goals.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="goal_id"
                component="div"
                className="form-error"
              />
            </div>

            <button type="submit" className="form-button">
              Add Exercise
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ExerciseForm;
