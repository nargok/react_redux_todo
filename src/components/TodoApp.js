import React from 'react';

const TodoApp = ({ task, tasks, inputTask, addTask, resetTask, clickItem }) => {
  const items = tasks.map((task, index) => {
    if (task.done === false) {
      return <li key={index} onClick={() => clickItem(index)}>{task.title}</li>
    } else {
      return <s key={index} onClick={() => clickItem(index)}><li>{task.title}</li></s>
    }    
  });
  return (
    <React.Fragment>
      <div>
        <input type="text" onChange={(e) => inputTask(e.target.value)} />
        <button onClick={() => addTask()}>Add</button>
        <button onClick={() => resetTask()}>Reset</button>
      </div>
      <ul>{items}</ul>
    </React.Fragment>
  );
};

export default TodoApp;