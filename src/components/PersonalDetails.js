import React from "react";

export default class PersonalDetails extends React.Component {
  render() {
    return (
      <div>
        <input id="firstNameInput" type={"text"} placeholder={"First Name"}></input>
        <input id="surnameInput" type={"text"} placeholder={"Surname"}></input>
        <input id="emailInput" type={"email"} placeholder={"Email"}></input>
        <input id="phoneNumberInput" type={"number"} placeholder={"Phone Number"}></input>
        <textarea id="descriptionInput" placeholder="Description"></textarea>
      </div>
    )
  }
}