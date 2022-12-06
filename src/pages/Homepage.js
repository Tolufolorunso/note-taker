import React, { useState } from "react";
import "../app.css";
import Header from "../components/header/header";
import Form from "../components/form/Form";

import notes from "../assets/notes.json";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
    <Header />
      {isOpen ? <Form /> : <p>Add note</p>}
      <div>
        {notes.map((note) => {
          return (
            <div key={note.id}>
              <h2>{note.title}</h2>
              <p>{note.description}</p>
            </div>
          );
        })}
      </div>
      {null}
      <button className="takeNote" onClick={handleClick}>
        {isOpen ? "Close" : "Take Note"}
      </button>
    </div>
  );
};

export default HomePage;

