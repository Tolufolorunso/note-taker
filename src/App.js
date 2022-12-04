import React, { useState } from "react";
import "./app.css";
import Header from "./components/header/header";
import Form from "./components/form/Form";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lists
  const lists = [
    "i want to go to lagos",
    "i want eat",
    "hello there, are you follwing",
  ];

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Header />
      {isOpen ? <Form /> : <p>Add note</p>}
      <ul>
        {lists.map((list,index) => {
          return <li key={index}>{list}</li>;
        })}
      </ul>
      {null}
      <button className="takeNote" onClick={handleClick}>
        {isOpen ? "Close" : "Take Note"}
      </button>
    </div>
  );
};

export default App;

// const name = "abigail";
// const projectName = "Note Taking App";

// function clickHandler(e) {
//   e.preventDefault();
//   console.log("you clicked me");
// }
// return (
//   <div>
//     <Header name="Note Taking" onClick={clickHandler} />
//     <h1 onClick={clickHandler} className="heading">
//       {projectName.toUpperCase()}
//     </h1>
//     <form action="">
//       <button onClick={clickHandler}>Click Event</button>
//     </form>
//     <footer></footer>
//   </div>
// );
