import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../Axios/Axios";

const Delete = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let [state, setState] = useState({
    name: "",
    std_id: "",
    email: "",
    courses: "",
  });
  let { name, std_id, email, courses } = state;

  let handleDelete = async e => {
    await axios.delete(`/api/students/${id}`);
    navigate("/");
  };
  useEffect(() => {
    let fectData = async () => {
      let deletedData = await axios.get(`/api/students/${id}`);
      console.log(deletedData.data.payload);
      setState(deletedData.data.payload);
    };
    fectData();
  }, [id]);
  let mapData = Object.values(state).map(x => {
    return (
      <tr>
        <td>{x.std_id}</td>
        <td>{x.name}</td>
        <td>{x.email}</td>
        <td>{x.courses}</td>
      </tr>
    );
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>std_id</th>
            <th>StudenName</th>
            <th>Email address</th>
            <th>Courses</th>
          </tr>
        </thead>
        <tbody>
          {mapData}
          <td>
            <button onClick={handleDelete}>Delete</button>
          </td>
        </tbody>
      </table>
    </div>
  );
};

export default Delete;
