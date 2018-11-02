
// 初期値
const initialState = {
  task: '',
  tasks: []
};

// reduecer
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
        tasks: state.tasks.concat([
          { title: state.task, done: false}
        ]).reverse() // 降順にする
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
            return task
          } else {
            return task
          }
        })
      }
    default:
      return state;
  }
}

export default tasksReducer;