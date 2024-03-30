import React, { useState } from "react";
import Recommended from "./Recommended";

import Aside from "./aside";
import "./filter.css";
import ProductCards from "./ProductCards";

function DropdownMenu() {
  const [showFilter, setShowData] = useState(false);

  const toggleData = () => {
    setShowData((prevState) => !prevState);
  };

  return (
    <>
      <div className="app">
        <span style={{ fontWeight: "bold" }}>3645</span>
        <a href="#" onClick={toggleData} className="ms-5 text-secondary ">
          {showFilter ? "Hide Filter" : "Show Filter"}
        </a>
        <Recommended />
        <hr />
        <br />
        <div className="contain">
          {showFilter && <Aside />}
          <div className={showFilter ? "content with-aside" : "content"}>
            <ProductCards />
          </div>
        </div>
      </div>
    </>
  );
}

export default DropdownMenu;
