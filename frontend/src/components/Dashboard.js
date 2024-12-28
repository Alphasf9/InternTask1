import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:8000/api/v1/auth/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
        
        console.log(res.data);
        setData(res.data);
      } catch (err) {
        console.error(err);
        navigate("/login");
      }
    };
    fetchData();
  }, [navigate]);



  const containerStyle = {
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    maxWidth: "600px",
    margin: "30px auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const headerStyle = {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
  };

  const listItemStyle = {
    padding: "10px 0",
    borderBottom: "1px solid #ddd",
    display: "flex",
    justifyContent: "space-between",
  };

  const labelStyle = {
    fontWeight: "bold",
    color: "#555",
  };

  const valueStyle = {
    color: "#333",
  };

  return (

    <div style={containerStyle}>
      <h2 style={headerStyle}>Dashboard</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <span style={labelStyle}>Name:</span>
          <span style={valueStyle}>KK</span>
        </li>
        <li style={listItemStyle}>
          <span style={labelStyle}>Email:</span>
          <span style={valueStyle}>kk@gmail.com</span>
        </li>
        <li style={listItemStyle}>
          <span style={labelStyle}>Phone No:</span>
          <span style={valueStyle}>1234567890</span>
        </li>
        <li style={listItemStyle}>
          <span style={labelStyle}>Address:</span>
          <span style={valueStyle}>Kanpur</span>
        </li>
        <li style={listItemStyle}>
          <span style={labelStyle}>Answer:</span>
          <span style={valueStyle}>MSD</span>
        </li>
        <li style={listItemStyle}>
          <span style={labelStyle}>Role:</span>
          <span style={valueStyle}>Student</span>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
