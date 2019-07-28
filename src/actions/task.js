const inputTask = task => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
});

const addTask = () => ({
  type: 'ADD_TASK'
});

export {
  inputTask,
  addTask
};


