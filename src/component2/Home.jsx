import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "./../Axios/Axios";

const Home = () => {
  let { id } = useParams();
  let [state, setState] = useState([""]);
  useEffect(() => {
    let fatchData = async () => {
      let payload = await axios.get("/api/students");
      setState(payload.data.payload);
      console.log(payload.data);
    };
    fatchData();
  }, [id]);
  let mapData = Object.values(state).map(x => {
    return (
      <Fragment key={x._id}>
        <tr>
          
          <td>{x.std_id}</td>
          <td>{x.name}</td>
          <td>{x.email}</td>
          <td>{x.courses}</td>

          <td>
            <div>
              <Link to={`/edit-crud/${x._id}`}>edit</Link>
            </div>
            <div>
              <Link to={`/delete-crud/${x._id}`}>Delete</Link>
            </div>
          </td>
        </tr>
      </Fragment>
    );
  });
  return (
    <div>
      <div>
        <h1>Create Student List</h1>
        <button>
          <Link to={"/creat-crud"}>Create</Link>
        </button>
      </div>
      <Fragment>
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
            <tbody>{mapData}</tbody>
          </table>
        </div>
      </Fragment>
    </div>
  );
};

export default Home;
