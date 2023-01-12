
function ExpenseDate(){
    const date = new Date();   
    return (<div> 
            <h3> {date.getDay()+1} </h3>
            <h3> {date.getMonth()+1}</h3>
            <h3> {date.getFullYear()} </h3>
    </div>)
}
export default ExpenseDate;