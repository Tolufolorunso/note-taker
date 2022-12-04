import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [value, setValue] = useState("default value");

  function submitHandler(e) {
    e.preventDefault();
    console.log(value);
  }

  function onChangeHandler(e) {
    setValue(e.target.value);
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <h3 className="form__heading">Note</h3>
      <div className="form__group">
        <textarea
          className="form__input form__input edit__group-input"
          name="text"
          placeholder="Take a note..."
          id="text"
          cols="20"
          rows="2"
          onChange={onChangeHandler}
        ></textarea>

        <div className="button">
          <input type="submit" required value="ADD" className="submit__btn" />
        </div>
      </div>
    </form>
  );
};

export default Form;
