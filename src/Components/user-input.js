import React from "react";
import "../Styles/user-input.css";
import Switch from "@mui/material/Switch";

function UserInput(props) {
  function ShowInput(event) {
    const MealName = document.querySelector('input[name="food-name"]').value;
    const UserAmount = document.querySelector('input[name="amount"]').value;

    event.preventDefault();

    if (UserAmount && MealName) {
      props.setShow(true);
    }
  }

  function NameChange() {
    const MealName = document.querySelector('input[name="food-name"]').value;
    props.setNameInput(MealName);
  }

  return (
    <header className="user-input">
      <div className="lg-change">
        <p>PT-BR</p>
        <Switch onClick={props.languageChange}></Switch>
        <p>KR</p>
      </div>
      <h1>Macro tracker</h1>
      <div></div>
      <form className="input-form">
        <input
          type="text"
          name="food-name"
          onChange={NameChange}
          className="food-name"
          placeholder={props.foodph}
        ></input>
        <input
          type="number"
          name="amount"
          placeholder="g"
          className="amount-input"
        ></input>
        <button className="continue-button" onClick={ShowInput}>
          {props.btnph}
        </button>
      </form>
    </header>
  );
}

export default UserInput;
