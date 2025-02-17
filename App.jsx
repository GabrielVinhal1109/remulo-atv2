import {useState} from "react";
import TaskForm from "./TaskForm";
import Tasklist from "./Tasklist";


function App() {  
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, {text, completed: false }]);
};


  const toggleTask = (index) => {
    const newTasks = [...tasks];
    nevTasks[index].completed= newTasks[index].completed;
    setTasks(newTasks);
  };


  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };


  return(
    <div>
      <h1> Bem vindo a lista de tarefas! </h1>
      <TaskForm onAddTask={addTask} />
      <Tasklist tasks={tasks} onToggleTask={toggleTask} onDeleteTask={deleteTask}/>
    </div>
  );
}

export default App;