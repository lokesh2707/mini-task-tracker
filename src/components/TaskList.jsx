import TaskItem from "./TaskItem";
function TaskList({
  tasks,
  deleteTask,
  toggleTask,
  editTask,
  updateTask,
}) {
  return (
    <div>
      <h2>Tasks</h2>

      <ul>
        {tasks.map((task, index) => (
        <TaskItem
  key={index}
  task={task}
  index={index}
  deleteTask={deleteTask}
  toggleTask={toggleTask}
  editTask={editTask}
  updateTask={updateTask}
/>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;