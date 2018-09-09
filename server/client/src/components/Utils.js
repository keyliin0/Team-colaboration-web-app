import React from "react";

const Utils = () => {
  return (
    <div className="Utils">
      <div className="right float-right">
        <ul>
          <li>
            <i className="fas fa-sign-out-alt" />
          </li>
          <li>
            <i className="fas fa-cog" />
          </li>
          <li>
            <i className="fas fa-bell" />
          </li>
          <li>
            <hr />
          </li>
          <li>
            <span>John Doe</span>
          </li>
          <li>
            <img
              src="https://www.w3schools.com/bootstrap4/newyork.jpg"
              className="rounded-circle"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Utils;
