import React from "react";
import { tableData } from "../sampleData";
import CustomButton from "../Button/Button";

const Table = () => {
  return (
    <div
      style={{
        border: "1px solid black",
        marginTop: 20,
      }}
    >
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>View More</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.city}</td>
              <td>
                <CustomButton
                  buttonIcon="more"
                  buttonIntent="primary"
                  buttonName="Know More"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
