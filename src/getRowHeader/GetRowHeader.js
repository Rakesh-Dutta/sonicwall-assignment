import React from "react";
import "./GetRowHeader.css";

export default class GetRowHeader extends React.Component {
  render() {
    return (
      <div className="table">
        <div className="tableHeaderBody tableHeaderRow">
          <span className="tableHeader wd-10">ID</span>
          <span className="tableHeader wd-5">GENDER</span>
          <span className="tableHeader wd-10">NAME</span>
          <span className="tableHeader wd-20">EMAIL</span>
          <span className="tableHeader wd-10">BALANCE</span>
          <span className="tableHeader wd-5">EYECOLOR</span>
          <span className="tableHeader wd-15">PHONE</span>
          <span className="tableHeader wd-25">ADDRESS</span>
          <span className="tableHeader wd-10">MARITAL_STATUS</span>
        </div>
      </div>
    );
  }
}
