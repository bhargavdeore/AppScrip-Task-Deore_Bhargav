import React from "react";
import Filter from "./Filter";
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h2 className="mt-5">Discover Our Products</h2>
          <p className="mt-3 mx-auto para" style={{ maxWidth: '394px' }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus eum ipsam nobis sit magnam magni.
          </p>
        </div>
      </div>
      <br />
      <hr />
      <Filter />
    </div>
  );
};

export default Homepage;
