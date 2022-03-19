import "./Expenseitem.css";
import Expensedate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const Expenseitem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <Expensedate date={props.date} />

        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
      </Card>
    </li>
  );
};
export default Expenseitem;
