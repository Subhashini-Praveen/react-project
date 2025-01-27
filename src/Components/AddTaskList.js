import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddTaskList(props) {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [radioButton1, setRadioButton1] = useState(false);
    const [radioButton2, setRadioButton2] = useState(false);
    const [completedStatus, setCompletedStatus] = useState('');

    function handleSubmit() {
        const existData = localStorage.getItem('tasklist');
        console.log('log---', title, radioButton1, radioButton2);
        console.log(props, '----------propppp---', props.tasklist.length);
        if (existData) {
            const parsedData = JSON.parse(existData);
            const id = parsedData.length + 1;
              parsedData.push({ id: id, title: title, completedStatus: completedStatus });
             const listJson = JSON.stringify(parsedData);
              localStorage.setItem('tasklist', listJson);
              navigate('/tasklist');

        } else {
            const id = props.tasklist.length + 1;
            props.tasklist.push({ id: id, title: title, completedStatus: completedStatus });
            console.log(props, '----------propppp---');
            const listJson = JSON.stringify(props.tasklist);
            localStorage.setItem('tasklist', listJson);
            navigate('/tasklist');
        }
    };
    return (
        <div>
            <p>Add New Task</p>
            <form> 
                <label>
                    Title
                    <br></br>
                    <input name='title' type='text' value={title} onChange={((e) => { setTitle(e.target.value) })}></input>
                </label>
                <br></br>
                
                <label>
                    Status
                    <br></br>
                    <label>Completed
                        <input name='status' type='radio' value={radioButton1} onChange={((e) => { setCompletedStatus('completed'); setRadioButton1(e.target.value) })}></input>
                        </label>
                    <label>Pending
                        <input name='status' type='radio' value={radioButton2} onChange={((e) => {  setCompletedStatus('pending'); setRadioButton2(e.target.value) })}></input>
                        </label>
                </label>
                 <br></br>
                 <br></br>
                {/* <input type='submit' onClick={handleSubmit}></input> */}
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}
export default AddTaskList;