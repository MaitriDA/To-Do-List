import React, { useState } from 'react';
import ToDoList from './ToDoList.jsx'

const App = () =>{

    const[inputList,setInputList]=useState("");
    const[items,setItems]=useState([]);
    const addItem = (event) =>{
        setInputList(event.target.value);
    };
    
    const listOfItems=()=>{
        
        setItems((oldItems)=>{
            return[...oldItems,inputList];
        });
        setInputList("");
    };
    const deleteItem=(id)=>{
        console.log("delete");
        setItems((oldItems=>{
            return oldItems.filter((arrElem,index)=>{
                return index !==id;  
            })
        }))
    }
    var date=new Date();
    var day=date.getDay();
    const daysArray=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var numDate=date.getDate();
    var month=date.getMonth();
    const monthArray=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return(
        <>
        <div className="mainDiv">
            <div className="centerDiv">
            <br/>
            <h1>To Do List</h1>
            <div className="dayDate">{daysArray[day]} | {numDate} {monthArray[month]}</div>
            <input type="text" placeholder="add an item" value={inputList} onChange={addItem}/>
            <button className="add" onClick={listOfItems}>+</button>
            <ol>
            {items.map( (itemValue,index)=>{
                 return <ToDoList key={index} id={index} text={itemValue} onSelect={deleteItem}
                />;
            })}
            </ol>
            </div>
        </div>
        </>
    );
};
export default App;