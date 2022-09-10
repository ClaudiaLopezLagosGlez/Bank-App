import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const CreateAccount = () => {

  const [showAccountForm, setShowAccountForm] = useState(true);

  const post = (values) => {
    //alert(JSON.stringify(values));
    setShowAccountForm(false);
  };

  const validate = (values) => {
    const errors = {};
    if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const clearForm = () => {
    setShowAccountForm(true);
  };

  return (
    <div className="CardCreateAccount  text-secondary">
      <div className="position-absolute top-50 start-50 translate-middle text-center ">
        <React.Fragment>
        {
          showAccountForm ? 
          (
          <Card border="secondary" style={{ width: "16rem" }}>
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
              }}
              onSubmit={post}
              validate={validate}
            >
              <Form>
                <div>
                  <h2>Create Account</h2>
                  <h6>Name:</h6>
                  <Field name="name" type="text" placeholder="Enter name" />
                </div>
                <div>
                  <h6>Email:</h6>
                  <Field name="email" type="email" placeholder="Enter email" />
                </div>
                <div>
                  <h6>Password:</h6>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password" />
                </div>
                <div></div>
                <button type="submit">Submit</button>
              </Form>
            </Formik>
          </Card>
          ) : (
<Card border="secondary" style={{ width: "16rem" }}>
            <h5>Account created sucessfully!</h5> 
            <button onClick={clearForm}>
              <h6>Add another account </h6>
              <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-person-plus-fill"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />{" "}
                      <path
                        fill-rule="evenodd"
                        d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                      />
                    </svg>
            </button>
            </Card>
            
          )
        }
        </React.Fragment>
      </div>
    </div>
  );
};

export default CreateAccount;
