import React from "react";
import Card from "react-bootstrap/Card";
import Table from 'react-bootstrap/Table';

export const AllData = () => {
  return (
    <div className="CardDeposit  text-secondary">
    <div className="position-absolute top-50 start-50 translate-middle text-center">
      <div className="IconPadlockDeposit">
      <Card border="secondary" style={{ width: "50rem" }}>
      <Table striped="columns">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Cash flow</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Claudia</td>
          <td>claudia_lopezlagos@hotmail.com</td>
          <td>$1000</td>
        </tr>
       
      </tbody>
    </Table>
        </Card>
      </div>
     
     
    </div>
  </div>
  );
};
