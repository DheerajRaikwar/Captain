import ExpenseDate from "./ExpenseDate";
import './Expenses.css';

const clickHandle = () =>{
    return(<div> 
        <h1> I am coming from out of world</h1>
    </div>)
}
function ExpenseItem(props) {
    return (<div class="row">

        <h2> <ExpenseDate /> Title : 
         <button onClick={clickHandle}> change it!</button>
         </h2>
    </div>)
}
export default ExpenseItem;