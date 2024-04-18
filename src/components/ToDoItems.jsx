import React from "react";

function ToDoItems(props){



    // function handleClick(){}

  
    return(
        <div onClick={props.onChecked(props.id)}>
        <li>{props.text}</li>

        </div>
    )
}





// function ToDoItems(props){

//     const [isDone, setDone] = useState(false);

//      function handleClick(){
//        setDone( preValue => {
//         return !preValue;
//        }
//     )}
//     return(
//         <div onClick={handleClick}>
//         <li style={{textDecoration: isDone? "line-through" : null}}>{props.text}</li>

//         </div>
//     )
// }

export default ToDoItems;