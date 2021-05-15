// Assume we have a form e.g
// <form>
//    <input type=”text” name=”firstname” />
//    <input type=”check” name=”checkme” />
//    <input type=”submit” value=”submit”
// </form>
// For the above form, write validation in javascript so that if the firstname is empty or if checkme is not checked, it will not allow the form to submit.

import React, { useState } from "react";

function Question_4() {
  const [text, setText] = useState("");
  const [check, setCheck] = useState(false);

  const validateFields = (e) => {
    if (text === "" || check == false) {
      alert("Please fill Firstname and click on Checkme");
      e.preventDefault();
      return false;
    }
    console.log("Form subbmited");
  };

  console.log(text);

  return (
    <div>
      <form onSubmit={validateFields}>
        <input
          type="text"
          name="firstname"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <input
          type="checkbox"
          name="checkme"
          onClick={() => {
            setCheck(!check);
          }}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Question_4;
