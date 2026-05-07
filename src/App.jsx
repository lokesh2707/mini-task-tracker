import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (input.trim() === "") {
      return;
    }

    const newTask = {
  text: input,
  completed: false,
};

setTasks([...tasks, newTask]);

    setInput("");
  }

  function deleteTask(indexToDelete) {
    const updatedTasks = tasks.filter(
      (_, index) => index !== indexToDelete
    );

    setTasks(updatedTasks);
  }
  function toggleTask(indexToToggle) {
  const updatedTasks = tasks.map((task, index) => {
    if (index === indexToToggle) {
      return {
        ...task,
        completed: !task.completed,
      };
    }

    return task;
  });

  setTasks(updatedTasks);
}
  return (
    <div>
      <h1>Mini Task Tracker</h1>

      <TaskForm
  input={input}
  setInput={setInput}
  addTask={addTask}
/>
      <TaskList
  tasks={tasks}
  deleteTask={deleteTask}
  toggleTask={toggleTask}
/>
    </div>
  );
}

export default App;