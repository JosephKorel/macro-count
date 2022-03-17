import React from "react";
import "../Styles/food-list.css";
import { HiOutlineMinusCircle } from "react-icons/hi";

function FoodList(props) {
  return props.list.map((obj) => (
    <div key={obj.id}>
      <div className="meal-macro">
        <div>
          <h1 className="mealh1">{obj.meal}</h1>
          <h2 className="amounth2">
            {props.amount}: {obj.amount} g
          </h2>
          <h2 className="amounth2">{obj.kcal} kcal</h2>
        </div>
        <ul>
          <li className="carbli">
            <span>C </span> {obj.carbo} g
          </li>
          <li className="protli">
            <span>P </span> {obj.protein} g
          </li>
          <li className="fatli">
            <span>G </span> {obj.fat} g
          </li>
        </ul>
        <HiOutlineMinusCircle
          onClick={() => props.deleteItem(obj)}
          size={"3em"}
          className="delete-icon"
        ></HiOutlineMinusCircle>
      </div>
      <div className="user-amount"></div>
    </div>
  ));
}

export default FoodList;
