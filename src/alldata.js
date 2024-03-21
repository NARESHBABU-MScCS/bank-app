import React, { useContext } from "react";
import UserContext from "./context";
import "./pagestyle.css";
import "./background.css";

export default function AllData() {
  // Fetching data from UserContext
  const alldata = useContext(UserContext);

  // Function to render table header
  function renderTableHeader() {
    if (!alldata.users || alldata.users.length === 0) {
      return (
        <th>
          No data available
        </th>
      );
    }
    
    let header = Object.keys(alldata.users[0]);
    return header.map((value, index) => {
      return <th key={index}>{value}</th>;
    });
  }

  // Function to render table data
  function renderTableData() {
    if (!alldata.users || alldata.users.length === 0) {
      return (
        <tr>
          <td colSpan="3">No data available</td>
        </tr>
      );
    }

    return alldata.users.map((user, index) => {
      const { username, email,password, balance } = user; // Destructuring user object
      return (
        <tr key={index}>
          <td>{username}</td>
          <td>{email}</td>
          <td>{password}</td>
          <td>{balance}</td>
        </tr>
      );
    });
  }

  return (
    <>
      <center>
        <h1 id="backgrounds">Account History</h1>
        <b>
          <table className="table">
            <thead>
              <tr>{renderTableHeader()}</tr>
            </thead>
            <tbody>{renderTableData()}</tbody>
          </table>
          <br />
        </b>
      </center>
    </>
  );
}
