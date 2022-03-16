import React from "react";
import "../Styles/user-input.css";

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
      <h1>Macro tracker</h1>
      <form className="input-form">
        <input
          type="text"
          name="food-name"
          onChange={NameChange}
          className="food-name"
          placeholder="Alimento"
        ></input>
        <input
          type="number"
          name="amount"
          placeholder="g"
          className="amount-input"
        ></input>
        <button className="continue-button" onClick={ShowInput}>
          Continuar
        </button>
      </form>
    </header>
  );
}

export default UserInput;
