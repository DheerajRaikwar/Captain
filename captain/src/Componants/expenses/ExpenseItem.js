import ExpenseDate from "./ExpensesDate";

function ExpenseItem(props) {
    return (<div>
         <h2> Time : <ExpenseDate /> </h2>
        <h2> ItemName :{props.title}</h2>
        <h2> Amount : {props.amount} </h2>
        </div>
       );
}

export default ExpenseItem;