import { connect } from 'react-redux';
import TodoApp from '../components/TodoApp';
import { inputTask, addTask, resetTask, clickItem } from '../actions/task';

// Storeにあるtask, tasksというStateをPropsにわたす
const mapStateToProps = ({ task, tasks }) => {
  return {
    task,
    tasks
  };
}

// 該当のActionをDispatchする関数をPropsに渡す
const mapDispatchToProps = (dispatch) => {
  return {
    inputTask(task) {
      dispatch(inputTask(task))
    },
    addTask() {
      dispatch(addTask())
    },
    resetTask() {
      dispatch(resetTask())
    },
    clickItem(index) {
      dispatch(clickItem(index))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);