import React, { useState } from "react";
import FoodList from "./food-list";
import FoodInput from "./food-input";
import UserInput from "./user-input";
import TotalCalories from "./diet-overview";
import Bars from "./progress-bar";

function Main() {
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  const [nameInput, setNameInput] = useState("");

  function deleteItem(obj) {
    let newList = list.filter((it) => it.id != obj.id);
    setList(newList);
  }

  return (
    <div>
      <UserInput
        setShow={setShow}
        name={nameInput}
        setNameInput={setNameInput}
      ></UserInput>
      <FoodInput
        list={list}
        setList={setList}
        show={show}
        setShow={setShow}
        setNameInput={setNameInput}
      />
      <main>
        {!list[0] ? (
          <div>
            <h1 className="guide">
              Digite o nome do alimento e a quantidade a ser consumida
            </h1>
          </div>
        ) : (
          <div className="meal-container">
            <div className="meals">
              <FoodList list={list} deleteItem={deleteItem} />
            </div>
            <TotalCalories list={list} />
          </div>
        )}
      </main>
    </div>
  );
}

export default Main;
