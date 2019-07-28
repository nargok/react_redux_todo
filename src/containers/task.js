import { inputTask, addTask } from "../actions/task";
import { connect } from 'react-redux';
import Task from '../components/task';


const mapStateToProps = ({ tasks }) => {
  return {
    tasks
  }
};

const mapDispatchToProps = dispatch => {
  return {
    inputTask: task => {
      dispatch(inputTask(task))
    },
    addTask: () => {
      dispatch(addTask())
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
