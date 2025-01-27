
function CompletedTaskList(props) {
    const localStorageList = localStorage.getItem('tasklist');
     const list = [];
    if (localStorageList) {
        const parsedData = JSON.parse(localStorageList);
        parsedData.map((obj) => {
            if (obj.completedStatus === 'completed') {
                list.push(obj);
            }
        });
    } else {
        props.tasklist.map((obj) => {
            if (obj.completedStatus === 'completed') {
                list.push(obj);
            }
        });
    }
    return (
        <div> 
             <div>
                  <table width='100%'>
                      <tr>
                        <th>Id</th>  
                        <th>Title</th>  
                        <th>Status</th>  
                      </tr>
                        {list.map((obj) => (
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
};
export default CompletedTaskList;