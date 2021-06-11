import './App.css';
import React,{useState} from 'react';
import AddInput from './components/AddInput.js';
import DisplayItem from './components/DisplayItem.js';

function App() {

  const [items, setItems] = useState([]);

  const addItems = (inputTxts)=>{
    setItems((prevItem)=>{
      return [...prevItem,inputTxts];
    });
  }

  // console.log(items);
  const deleteList = (id)=>{
    setItems((prevItem)=>{
        return prevItem.filter((list, index)=>{
          return index !== id;
        });
    });
  };

  return (
    <div className="conatiner">
      <div className="title">
        <h1>To Do List</h1>
      </div>
      <AddInput addItems={addItems}/>
      <div>
        <ul>
          {
            items.map((list, indexNo)=>{
             return <DisplayItem key={indexNo} items={list} deleteList={deleteList} id={indexNo}/>;
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
