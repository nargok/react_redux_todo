const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
});

const addTask = () => ({
  type: 'ADD_TASK'
})

const clearTask = () => ({
  type: 'CLEAR_TASK'
})

const clickItem = (index) => ({
  type: 'CLICK_ITEM',
  payload: {
    index
  }
});

export { inputTask, addTask, clearTask, clickItem };