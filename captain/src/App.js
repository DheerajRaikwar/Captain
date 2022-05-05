import logo from './logo.svg';
import './App.css';
import ExpenseItem from './Componants/expenses/ExpenseItem';
import ExpenseDate from './Componants/expenses/ExpensesDate';

function App() {
  const expensesArr = [{item: "Car", amount: 500000 }, { item: "Halicopter", amount: 500000 }];
  return (
    <div>
    <ExpenseItem title={expensesArr[0].title} amount={expensesArr[0].amount}><ExpenseDate/></ExpenseItem>
    <ExpenseItem title={expensesArr[1].title} amount={expensesArr[1].amount}></ExpenseItem>
    </div>
  );
}

export default App;
