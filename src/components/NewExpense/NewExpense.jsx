import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import Buttons from "../Expenses/Buttons";
const NewExpense = (props) => {
  const [show, setShow] = useState(false);

  const cancel = () => setShow(false);
  const add = () => setShow(true);

  const saveExpenseDataHAndler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {show ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHAndler}
          cancel={cancel}
        />
      ) : (
        <Buttons cancel={cancel} add={add} />
      )}
    </div>
  );
};

export default NewExpense;
