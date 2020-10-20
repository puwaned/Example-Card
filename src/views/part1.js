import React from "react";

const Part1 = ({ title }) => {
  return (
    <div className="card">
      <div className="row" style={{ display: "flex", alignItems: "center" }}>
        <div className="col-6" style={{ fontSize: 20 }}>
          {title}
        </div>
        <div className="col-6" style={{ textAlign: "right" }}>
          <span className="card-select">Select</span>
        </div>
      </div>
      <div className="row" style={{ marginTop: 50 }}>
        <div
          className="col-6 line"
          style={{ zIndex: 1, marginRight: "-10px", backgroundColor: "pink" }}
        ></div>
        <div className="col-6 line"></div>
      </div>
      <div className="row" style={{ marginTop: 45 }}>
        <div className="col-6" style={{ fontSize: 20 }}>
          98786
        </div>
        <div className="col-6" style={{ textAlign: "right", fontSize: 20 }}>
          98786
        </div>
      </div>
    </div>
  );
};

export default Part1;
