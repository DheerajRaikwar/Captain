import React from 'react';

const ListItem = (props) => {

    
    return (
        <> 
            <div> 
            <p className="taskid"> {props.item} &nbsp;&nbsp;
            <button className="add done" onClick={() => {props.onSelect(props.id); }} > Done </button>
            </p>
            </div>
            
            
        </>
    )
}
export default ListItem;