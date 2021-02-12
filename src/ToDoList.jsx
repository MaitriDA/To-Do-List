import React from 'react';

const ToDoList = (props) => {
    
   

    return(
        <>
            <div className="todo">
                <li>{props.text}</li>
                <button className="delete" onClick={()=>{
                    props.onSelect(props.id);
                }}>X</button>
            </div>
        </>
    );
}
export default ToDoList;