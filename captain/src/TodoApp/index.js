import React, { useState } from 'react';
import ListItem from '../Componants/comp/ListItem';

const TodoApp = () => {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const showEvent = (event) => {
        setInputList(event.target.value);
    };
    const onAddTask = () => {
        setItems((ptask) => {
            return [...ptask, inputList];
        });

    };

    const doneItem =(id) =>{
        console.log("item deleted");
        setItems((ptask)=>{
            return ptask.filter((arrE,index)=>{
                return index!==id;
            })
        })
    }

    return (
        <>
            <div className='todoDiv'>
                <div className="Header">
                    Thanks for Visit!
            </div>
                <div className='topNav'>
                    <a href="#">Projects</a>
                    <a href="#"> About</a>
                    <a href="#"> More</a>
                </div>

                <div className="row">
                    <div className="col w-input">
                        <p className="todoTitle" > Enter Your Task</p>

                        <input type="text" className="myTask" value={inputList} placeholder="Enter task" onChange={showEvent} /><br />
                        <button className="add" onClick={onAddTask} >Add</button>
                    </div>

                    <div className="col w-task">
                        <p className="todoTitle" > Your Task</p>
                        <ul className="taskList">

                            {
                                items.map((taskval,index) => {
                                    return <ListItem item={taskval}
                                    key={index}
                                    id={index}
                                    onSelect={doneItem} />
                                })
                            }

                        </ul>
                    </div>
                    <div className="col w-task">
                        <p className="todoTitle" > Done</p>
                        
                    </div>
                </div>




            </div>

        </>
    )

}

export default TodoApp;