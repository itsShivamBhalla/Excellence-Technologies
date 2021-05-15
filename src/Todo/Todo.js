import React, { useState } from "react";

function Todo() {
  const [value, setValue] = useState();
  const [list, setList] = useState([]);

  return (
    <div>
    <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Enter todo here..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <input
        type="submit"
        value="Add Todo"
        onClick={() => {
          setList((oldList) => {
            return [...oldList, value];
          });
          setValue("");
        }}
      />

      {list.map((listItems) => {
        return <p>{listItems}</p>
      })}

    </div>
  );
}

export default Todo;
