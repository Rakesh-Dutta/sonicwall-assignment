import React, { Component } from "react";
import $ from "jquery";
import "./App.css";
import data from "./data";
import GetRow from "./getRow/GetRow";
import GetRowHeader from "./getRowHeader/GetRowHeader";
import PersonPopUp from "./personPopup/PersonPopUp";

class App extends Component {
  constructor() {
    super();
    this.waitTime = 2 * 1000;
    this.setTimeOutTimer = null;
    this.scrollIndex = 1;
    this.state = {
      persons: data.filter((person, index) => index < 20 * this.scrollIndex),
      isPersonPopUpActive: false,
      popUpDetails: null
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if ($(window).scrollTop() + $(window).height() === $(document).height()) {
        setTimeout(() => {
          this.scrollIndex++;
          this.setState({
            persons: data.filter(
              (person, index) => index < this.scrollIndex * 20
            )
          });
        }, 2000);
      }
    });
  }

  filterData = event => {
    var searchedText = event.target.value;
    clearTimeout(this.setTimeOutTimer);
    this.setTimeOutTimer = setTimeout(() => {
      var fileredData = data.filter(
        (person, index) =>
          person.name.includes(searchedText) ||
          person.email.includes(searchedText) ||
          person.eyeColor.includes(searchedText) ||
          person.phone.includes(searchedText) ||
          person.address.includes(searchedText)
      );
      this.scrollIndex = Math.ceil(fileredData.length / 20);
      this.setState({ persons: fileredData });
    }, this.waitTime);
  };

  showPersonData = index => {
    var popUpDetails = data[index];
    this.setState({ isPersonPopUpActive: true, popUpDetails });
  };

  closePopUp = () => {
    this.setState({ isPersonPopUpActive: false, popUpDetails: null });
  };

  render() {
    let getRow = this.state.persons.map((person, index) => {
      return (
        <GetRow
          key={index}
          index={index}
          person={person}
          showPersonData={this.showPersonData}
        />
      );
    });
    return (
      <div className="App">
        <div className="filter-wrp">
          <div className="filter-lable">Search the person: </div>
          <input
            className="filter-input"
            placeholder="Search Here"
            onChange={this.filterData}
          />
        </div>
        <GetRowHeader />
        <div className="table-wrp">{getRow}</div>
        <PersonPopUp
          isPersonPopUpActive={this.state.isPersonPopUpActive}
          popUpDetails={this.state.popUpDetails}
          closePopUp={this.closePopUp}
        />
      </div>
    );
  }
}

export default App;
