import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import { Formik, Form, Field, ErrorMessage } from "formik";


export const Deposit = () => {
  

  return (
    <div className="CardDeposit  text-secondary">
      <div className="position-absolute top-50 start-50 translate-middle text-center ">
        <React.Fragment>
        
            <Card border="secondary" style={{ width: "16rem" }}>
              <Formik
              >
                <Form>
                  <h2>Deposit +</h2>
                  <div>
                   
                    <Field
                      name="depositAmount"
                    />
                  </div>
                  <div>
                    
                  </div>
                  <button type="submit">Submit</button>
                </Form>
              </Formik>
            </Card>
        </React.Fragment>
      </div>
    </div>
  );
};

export default Deposit;
