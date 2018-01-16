import React from "react";
import { Link } from "react-router-dom";

const PortofolioPage = () => (
  <div>
    <h1>My work</h1>
    <p>Checkout the stuff I've done:</p>
    <Link to="/portofolio/1">Item one</Link>
    <Link to="/portofolio/2">Item two</Link>
  </div>
);

export default PortofolioPage;
