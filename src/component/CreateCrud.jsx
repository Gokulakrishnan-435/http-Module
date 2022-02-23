import React, { useState } from "react";
import axios from "../Axios/Axios";
import { useNavigate } from "react-router-dom";

const CreatCrud = () => {
  let navigate = useNavigate();
  let [state, setState] = useState({
    name: "",
    std_id: "",
    email: "",
    courses: "",
  });
  let { name, std_id, email, courses } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = { name, std_id, email, courses };
      console.log(payload);
      await axios.post("/api/students", payload);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section id="formBlock">
      <article>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Student Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter your Name"
            />
          </div>
          <div>
            <label htmlFor="std_id">Student ID</label>
            <input
              type="text"
              name="std_id"
              value={std_id}
              onChange={handleChange}
              placeholder="Enter your Student-Id"
            />
          </div>
          <div>
            <label htmlFor="email">Student Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your Name"
            />
          </div>
          <div>
            <label htmlFor="courses">Student Courses</label>
            <input
              type="text"
              name="courses"
              id="courses"
              value={courses}
              onChange={handleChange}
              placeholder="Enter your Courses"
            />
          </div>
          <div>
            <button onSubmit={handleSubmit}>Submit</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default CreatCrud;
