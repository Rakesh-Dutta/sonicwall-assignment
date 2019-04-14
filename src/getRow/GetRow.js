import React from "react";
import "./GetRow.css";

export default class GetRow extends React.Component {
  render() {
    var { index, person, showPersonData } = this.props;
    return (
      <div className="table">
        <div className="tableBody">
          <div className={index ? "tableRow" : "tableRow mg-t-10"}>
            <span
              className="view-btn wd-5"
              onClick={() => showPersonData(index)}
            >
              view
            </span>
            <span className="wd-5">{person.id}</span>
            <span className="wd-5">{person.gender}</span>
            <span className="wd-10">{person.name}</span>
            <span className="wd-20">{person.email}</span>
            <span className="wd-10">{person.balance}</span>
            <span className="wd-5">{person.eyeColor}</span>
            <span className="wd-15">{person.phone}</span>
            <span className="wd-25">{person.address}</span>
            <span className="wd-10">
              {person.marital_status ? "Yes" : "No"}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
