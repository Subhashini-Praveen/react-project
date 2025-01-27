import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import TaskList from './Components/TaskList';
import AddTaskList from './Components/AddTaskList';
import CompletedTaskList from './Components/CompletedTask';

function TaskApp() {

  const taskList = [{
    id: 1,
    title: 'Task 1',
    completedStatus: 'completed'
  }, {
    id: 2,
    title: 'Task 2',
    completedStatus: 'pending'
  }, {
    id: 3,
    title: 'Task 3',
    completedStatus: 'completed'
  }, {
    id: 4,
    title: 'Task 4',
    completedStatus: 'pending'
  },
  
  ];

  // function handleOnClick() {
  //   console.log('inside----');
  //   // navigate('/tasklist');
  // };


   return (
    <div className="App">
       <h1>Task App</h1>
      <Router>
        <Routes> List
          <Route path='/tasklist' element={<TaskList tasklist={taskList} />}> List</Route>
          <Route path='/addtasklist' element={<AddTaskList tasklist={taskList} />}> List</Route>
          <Route path='/completedtask' element={<CompletedTaskList  tasklist={taskList} />}> List</Route>
          </Routes>
      </Router>
     
    </div>
  );
}

export default TaskApp;
