import React, { useEffect, useState } from "react";
import FoodList from "./food-list";
import FoodInput from "./food-input";
import UserInput from "./user-input";
import TotalCalories from "./total-calories";

function Main() {
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  const [nameInput, setNameInput] = useState("");

  const [guide, setGuide] = useState(
    "Digite o nome do alimento e a quantidade a ser consumida"
  );
  const [foodph, setFoodph] = useState("Alimento");
  const [btnph, setBtnph] = useState("Continuar");
  const [inputguide, setInputguide] = useState(
    "Agora digite os valores referentes à tabela nutricional"
  );
  /* Quantidades da tabela nutricional */
  const [amount, setAmount] = useState("Quantidade");
  const [carbamount, setCarbamount] = useState("Carboidratos");
  const [protamount, setProtamount] = useState("Proteínas");
  const [fatamount, setFatamount] = useState("Gorduras");
  const [addbtn, setAddbtn] = useState("Adicionar");

  function languageChange() {
    guide == "드실 음식과 액스를 입력하세요"
      ? setGuide("Digite o nome do alimento e a quantidade a ser consumida")
      : setGuide("드실 음식과 액스를 입력하세요");

    foodph == "음식" ? setFoodph("Alimento") : setFoodph("음식");
    btnph == "계속" ? setBtnph("Continuar") : setBtnph("계속");
    inputguide == "지금은 식품 성분표의 정보를 입력하세요"
      ? setInputguide("Agora digite os valores referentes à tabela nutricional")
      : setInputguide("지금은 식품 성분표의 정보를 입력하세요");

    carbamount == "탄수화물"
      ? setCarbamount("Carboidratos")
      : setCarbamount("탄수화물");

    protamount == "단백칠"
      ? setProtamount("Proteínas")
      : setProtamount("단백칠");

    fatamount == "지방" ? setFatamount("Gorduras") : setFatamount("지방");
    amount == "액스" ? setAmount("Quantidade") : setAmount("액스");
    addbtn == "넣다" ? setAddbtn("Continuar") : setAddbtn("넣다");
  }

  const storage = "savedlist";

  function deleteItem(obj) {
    let newList = list.filter((it) => it.id != obj.id);
    setList(newList);
  }

  useEffect(() => {
    let savedlist = JSON.parse(localStorage.getItem(storage));
    if (savedlist) {
      setList(savedlist);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(storage, JSON.stringify(list));
  }, [list]);

  return (
    <div>
      <UserInput
        setShow={setShow}
        name={nameInput}
        setNameInput={setNameInput}
        languageChange={languageChange}
        foodph={foodph}
        btnph={btnph}
      ></UserInput>
      <FoodInput
        list={list}
        setList={setList}
        show={show}
        setShow={setShow}
        setNameInput={setNameInput}
        inputguide={inputguide}
        amount={amount}
        carbamount={carbamount}
        protamount={protamount}
        fatamount={fatamount}
        addbtn={addbtn}
      />
      <main>
        {!list[0] ? (
          <div>
            <h1 className="guide">{guide}</h1>
          </div>
        ) : (
          <div className="meal-container">
            <div className="meals">
              <FoodList list={list} deleteItem={deleteItem} amount={amount} />
            </div>
            <TotalCalories
              list={list}
              carbamount={carbamount}
              protamount={protamount}
              fatamount={fatamount}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default Main;
