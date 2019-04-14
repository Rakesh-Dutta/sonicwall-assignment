import React from "react";
import "./PersonPopUp.css";

export default class PersonPopUp extends React.Component {
  render() {
    var person = this.props.popUpDetails;
    if (!this.props.isPersonPopUpActive) return null;
    return (
      <div className="pop-up-wrp">
        <div className="pop-up-body">
          <span className="close-pop-up" onClick={this.props.closePopUp}>
            X
          </span>
          <div className="pop-up-item">{`ID : ${person.id}`}</div>
          <div className="pop-up-item">{`GENDER : ${person.gender}`}</div>
          <div className="pop-up-item">{`NAME : ${person.name}`}</div>
          <div className="pop-up-item">{`EMAIL : ${person.email}`}</div>
          <div className="pop-up-item">{`BALANCE : ${person.balance}`}</div>
          <div className="pop-up-item">{`EYECOLOR : ${person.eyeColor}`}</div>
          <div className="pop-up-item">{`PHONE : ${person.phone}`}</div>
          <div className="pop-up-item">{`ADDRESS : ${person.address}`}</div>
          <div className="pop-up-item">{`MARITAL_STATUS : ${
            person.marital_status ? "Married" : "Unmarried"
          }`}</div>
        </div>
      </div>
    );
  }
}
