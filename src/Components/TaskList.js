import {useNavigate } from 'react-router-dom';

function TaskList(props) {
    const navigate = useNavigate();

    function handleAddNewTask() {
        navigate('/addtasklist');
    }
    function handleCompletedTaskList() {
        navigate('/completedtask');
    }
    const newList = localStorage.getItem('tasklist');
   
    const newTaskList = newList ? JSON.parse(newList) : props.tasklist;
    return (
        <div>
             <div style={{alignItems: 'left'}}>
                <button onClick={handleAddNewTask}>Add New Task</button>
            </div>
               <div style={{alignItems: 'left'}}>
                <button onClick={handleCompletedTaskList}>Completed Tasks List</button>
            </div>
            <div>
                  <table width='100%'>
                      <tr>
                        <th>Id</th>  
                        <th>Title</th>  
                        <th>Status</th>  
                      </tr>
                        {newTaskList.map((obj) => (
                            <tr>
                               <td> {obj.id}</td>
                               <td> {obj.title}</td>
                               <td> {obj.completedStatus}</td>
                            </tr>
                        ))}
                </table>
            </div>
        </div> 
    );
}
export default TaskList;