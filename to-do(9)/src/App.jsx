import react,{ useState } from 'react'
import './App.css'

function App() {
  const [task,setTask]=useState([
    {id:1, text: 'Lear React basics',completed:true},
    {id:2 , text:'Build to do project', completed:false},
    {id:3, text: 'Practice CSS',completed:false}
  ])

  const [inputValue,setInputValue]=useState('')
  const handleAddTask=(event)=>{
    event.preventDefault();
    const trimmedText = inputValue.trim();
    if(trimmedText === ''){
      return;
    }
    const newTask = {
      id: Date.now(),
      text: trimmedText,
      completed: false
    };
    setTask([...task,newTask]);
    setInputValue('');
  }

  const handleToggleTask=(taskId)=>{
      const updatedTasks= task.map((task)=>{
        if(task.id === taskId){
          return {...task, completed: !task.completed};
        }
        return task;
      });
      setTask(updatedTasks);
  };

  const handleDeleteTask=(taskId)=>{
    const remainingTask = task.filter(
      (task)=> task.id !== taskId
    );
    setTask(remainingTask);
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <form onSubmit={handleAddTask}>
        <input
        type="text"
        placeholder="Add new task"
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      {task.length === 0 ?(
        <p>No Task yet</p>
      ):(
        <ul>
          {task.map((task)=>(
            <li key ={task.id}>
              <div onClick={()=> handleToggleTask(task.id)}>
                <input
                type="checkbox"
                checked={task.completed}
                onChange={()=> handleToggleTask(task.id)}
                />
                <span>
                  {task.text}
                  {task.completed ?' (completed)':''}
                </span>
              </div>

              <button type="button" onClick={()=>handleDeleteTask(task.id)}>Delete</button>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App
