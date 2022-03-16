import React, { useEffect, useState } from "react";
import "../Styles/diet-overview.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CircularProgress from "@mui/material/CircularProgress";
function TotalCalories(props) {
  const objCarb = props.list.map((obj) => {
    return Number(obj.carbo);
  });
  const carbSum = objCarb.reduce((a, b) => a + b, 0);

  const objProtein = props.list.map((obj) => {
    return Number(obj.protein);
  });
  const proteinSum = objProtein.reduce((a, b) => a + b, 0).toFixed(1);

  const objFat = props.list.map((obj) => {
    return Number(obj.fat);
  });
  const fatSum = objFat.reduce((a, b) => a + b, 0).toFixed(1);

  const calories = props.list.map((obj) => {
    return Number(obj.kcal);
  });

  const calorieSum = calories.reduce((a, b) => a + b, 0);

  const carbPercentage = ((carbSum * 4 * 100) / calorieSum).toFixed(1);
  const proteinPercentage = ((proteinSum * 4 * 100) / calorieSum).toFixed(1);
  const fatPercentage = ((fatSum * 9 * 100) / calorieSum).toFixed(1);

  const totalCarbBar = (carbPercentage * calorieSum) / (carbSum * 4);
  const totalProtBar = (proteinPercentage * calorieSum) / (proteinSum * 4);
  const totalFatBar = (fatPercentage * calorieSum) / (fatSum * 9);

  const [carbup, setCarbup] = useState(0);
  useEffect(() => {
    const newcarb = setCarbup(Number(carbPercentage));
  });

  console.log(carbup);

  return (
    <div className="overview-div">
      <div className="bar-container">
        <div className="bars">
          <CircularProgressbar
            value={carbup}
            maxValue={totalCarbBar}
            text={carbPercentage + "%"}
            styles={buildStyles({
              pathTransitionDuration: 1,
              pathColor: "#e5383b",
              textColor: "#242423",
              trailColor: "#333533",
            })}
          ></CircularProgressbar>
        </div>
        <div className="bars">
          <CircularProgressbar
            value={Number(proteinPercentage)}
            maxValue={totalProtBar}
            text={proteinPercentage + "%"}
            styles={buildStyles({
              pathTransitionDuration: 1,
              pathColor: "#2b9348",
              textColor: "#242423",
              trailColor: "#333533",
            })}
          ></CircularProgressbar>
        </div>
        <div className="bars">
          <CircularProgressbar
            value={Number(fatPercentage)}
            maxValue={totalFatBar}
            text={fatPercentage + "%"}
            styles={buildStyles({
              pathTransitionDuration: 1,
              pathColor: "#f5cb5c",
              textColor: "#242423",
              trailColor: "#333533",
            })}
          ></CircularProgressbar>
        </div>
      </div>
      <h1 className="total-carb">Carboidratos: {carbSum} g</h1>
      <CircularProgress value={34}></CircularProgress>
      <h1 className="total-prot">Proteínas: {proteinSum} g</h1>
      <h1 className="total-fat">Gorduras: {fatSum} g</h1>
      <h1>Kcal: {calorieSum}</h1>
    </div>
  );
}

export default TotalCalories;
