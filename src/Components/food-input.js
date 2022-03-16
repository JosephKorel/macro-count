import React, { useState } from "react";
import "../Styles/food-input.css";

function FoodInput(props) {
  function addMeal(event) {
    event.preventDefault();
    const TableAmount = document.querySelector('input[name="nt-amount"]').value;
    const MealName = document.querySelector('input[name="food-name"]').value;

    if (TableAmount && MealName) {
      /* Valores dos inputs */

      const Amount = document.querySelector('input[name="amount"]').value;
      const TableCarb = document.querySelector('input[name="carb"]').value;
      const TableProtein = document.querySelector('input[name="prot"]').value;
      const TableFat = document.querySelector('input[name="fat"]').value;

      /* Macros da quantidade a ser consumida */
      const UserCarb = (TableCarb * Amount) / TableAmount;
      const UserProtein = (TableProtein * Amount) / TableAmount;
      const UserFat = (TableFat * Amount) / TableAmount;

      /* Quantidade calórica */
      const CarbKcal = UserCarb * 4;
      const ProteinKcal = UserProtein * 4;
      const FatKcal = UserFat * 9;
      const MealKcal =
        Math.round((CarbKcal + ProteinKcal + FatKcal + Number.EPSILON) * 100) /
        100;

      let obj = {
        meal: document.querySelector('input[name="food-name"]').value,
        tablemount: TableAmount,
        amount: document.querySelector('input[name="amount"]').value,
        carbo: UserCarb.toFixed(1),
        protein: UserProtein.toFixed(1),
        fat: UserFat.toFixed(1),
        kcal: MealKcal,
        id: Math.random().toString("16").substring(2),
      };
      props.setList([...props.list, obj]);

      /* Esconder o input após clicar */
      props.setShow(false);

      /* Limpar os inputs */
      /* document.querySelectorAll("input").forEach((input) => (input.value = "")); */
    }
  }

  function hide(event) {
    if (event.target.className == "header-div") {
      props.setShow(false);
    }
  }

  return (
    <div
      className={props.show ? "header-div" : "header-div hide"}
      onClick={hide}
    >
      <form className="macro-input" id="table-input">
        <h1 className="input-guide">
          Agora digite os valores referentes à tabela nutricional
        </h1>
        <div className="macro">
          <input
            type="number"
            name="nt-amount"
            placeholder="Quantidade"
            id="qtd-input"
          ></input>
          <input
            type="number"
            name="carb"
            placeholder="Carboidrato"
            id="carb-input"
          ></input>
          <input
            type="number"
            name="prot"
            placeholder="Proteína"
            id="prot-input"
          ></input>
          <input
            type="number"
            placeholder="Gordura"
            name="fat"
            id="fat-input"
          ></input>
        </div>
        <input
          type="submit"
          onClick={addMeal}
          value="Adicionar"
          id="add-button"
        ></input>
      </form>
    </div>
  );
}

export default FoodInput;
