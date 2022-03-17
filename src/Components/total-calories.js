import React, { useEffect, useState } from "react";
import "../Styles/total-calories.css";
import { Progress } from "antd";

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
        <div className="progress-bars">
          <Progress
            type="circle"
            strokeColor="#e5383b"
            percent={Number(carbPercentage)}
            width={150}
            trailColor="#333533"
          />
          <h1>
            {props.carbamount}: {carbSum.toFixed(1)} g
          </h1>
        </div>
        <div className="progress-bars">
          <Progress
            type="circle"
            strokeColor="#2b9348"
            percent={Number(proteinPercentage)}
            width={150}
            trailColor="#333533"
          />
          <h1>
            {props.protamount}: {proteinSum} g
          </h1>
        </div>
        <div className="progress-bars">
          <Progress
            type="circle"
            strokeColor="#F5CB5C"
            percent={Number(fatPercentage)}
            width={150}
            trailColor="#333533"
          />
          <h1>
            {props.fatamount}:<br></br>
            {fatSum} g
          </h1>
        </div>
      </div>
    </div>
  );
}

export default TotalCalories;
