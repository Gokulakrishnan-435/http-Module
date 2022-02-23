import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../Axios/Axios";

const EditCrud = () => {
  let { id } = useParams();
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
      await axios.put(`/api/students/${id}`, payload);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    let fectData = async () => {
      let ExistData = await axios.get(`/api/students/${id}`);
      console.log(ExistData.data.payload);
      setState(ExistData.data);
    };
    fectData();
  }, [id]);
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
              placeholder="Enter your email"
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

export default EditCrud;
