import React from 'react';
import './Links.css';
import { Link } from "react-router-dom";

class Links extends React.Component {
  render() {
    return (
      <div id="container">
        <Link to="/" id="links">Home</Link>
        <br />

        <Link to="/test" id="links">Wanna test?</Link>
        <br />
        <Link to="/history" id="links">History</Link>
        <br />
        <Link to="/about" id="links">About Us</Link>
      </div>
    );
  }
}

export default Links;
