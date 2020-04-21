import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/action-creators";

const Users = ({ fetch }) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("http://localhost:7000/api/users", setUsers);
        
    }, [])
  return <>{users.map(el => {
      return(
          <div>
              <h2>{el.username}</h2>
          </div>
      )
  })}</>;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, actionCreators)(Users);
