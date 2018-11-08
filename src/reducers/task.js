const initialState = {
  task: '',
  tasks: []
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task
      }
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([ { title: state.task, done: false }])
      }
    case 'RESET_TASK':
      return {
        ...state,
        tasks: []
      }
    case 'CLICK_ITEM':
      return {
        ...state,
        tasks: state.tasks.map((task, index) => {
          if (index === action.payload.index) {
            task.done = !task.done
          }
          return task;
        })
      }
    default:
      return state;
  }
};

export default tasksReducer;