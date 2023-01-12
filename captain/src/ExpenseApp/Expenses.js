import ExpenseItem from './Components/ExpenseItem';
import './Components/Expenses.css';


function Expenses(items) {
    const expensesArr = [{ item: "Car", amount: 500000 }, { item: "Halicopter", amount: 500000 }];
    return (
    <div class="card_body">
        <div> <ExpenseItem itmes={expensesArr}/> </div>
    </div>
    )


}
export default Expenses;