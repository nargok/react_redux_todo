import React from 'react';

const TodoApp = ({ tasks, input, add, clear, click }) => {
  const items = tasks.map((task, index) => {
    if (task.done === false) {
      return <li key={index} onClick={() => click(index)}>{task.title}</li>
    } else {
      return <s key={index} onClick={() => click(index)}><li>{task.title}</li></s>
    }
  });
  return (
    <React.Fragment>
      <div>
        <input type="text" onChange={(e) => input(e.target.value)} />
        <button onClick={() => add()}>Add</button>
        <button onClick={() => clear()}>Clear</button>
      </div>
      <ul>{items}</ul>
    </React.Fragment>
  )
};

export default TodoApp;