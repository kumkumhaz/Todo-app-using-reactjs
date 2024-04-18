import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ToDoItems from './components/ToDoItems';

function App() {
 
  const [inputTxt, setInputTxt] = useState("");
  const [ item, setItem] = useState([]);

  function handleOnClick(){
      setItem((preValue) => {
        return [inputTxt, ...preValue,];
       })
       setInputTxt("");
  }

  function handleOnChange(event){
      setInputTxt(event.target.value)
  }
  
  function HandleDelete(id){
    // setItem((preItems) =>{
       
    // })
    console.log(id)
  }


  return (
        <div className="container">
      <div className="heading">
        <Header/>
      </div>
      <div className="form">
        <input onChange={handleOnChange} value={inputTxt} type="text" />
        <button onClick={handleOnClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todoItem, index) => 
          (
            <ToDoItems  
            text = {todoItem}
            key = {index}
            id = {index}
            onChecked ={HandleDelete}
            />
          )
           )}
        </ul>
      </div>
    </div>
  );
}

export default App;
