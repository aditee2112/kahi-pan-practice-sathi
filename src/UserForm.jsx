import React, { useState } from "react";

const UserForm = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
  });
  const [submittedData, setSubmittedData] = useState();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(userDetails);
    setUserDetails({
      name: "",
      email: "",
      password: "",
      city: "",
    });
  };

  const onHandleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };
  return (
    <div>
      {!submittedData && (
        <>
          <h2>User Form</h2>

          <form onSubmit={onHandleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                onChange={onHandleInputChange}
                required
              />
            </div>

            <div>
              <label>Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                onChange={onHandleInputChange}
                required
              />
            </div>

            <div>
              <label>Password:</label>
              <input
                type="password"
                placeholder="Enter your password..."
                name="password"
                onChange={onHandleInputChange}
                required
              />
            </div>

            <div>
              <label>City:</label>
              <input
                type="text"
                placeholder="Enter your city..."
                name="city"
                onChange={onHandleInputChange}
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </>
      )}
      {submittedData && (
        <>
          <h2>User Details</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>City: {submittedData.city}</p>
        </>
      )}
    </div>
  );
};
export default UserForm;
