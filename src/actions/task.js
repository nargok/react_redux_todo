// action
const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
});

const addTask = () => ({
  type: 'ADD_TASK'
});

const resetTask = () => ({
  type: 'RESET_TASK'
});

const clickItem = (index) => ({
  type: 'CLICK_ITEM',
  payload: {
    index
  }
});

export { inputTask, addTask, resetTask, clickItem };