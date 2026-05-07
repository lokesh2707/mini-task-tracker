function TaskItem({
  task,
  index,
  deleteTask,
  toggleTask,
}) {
  return (
    <li>
      <span
        onClick={() => toggleTask(index)}
        style={{
          textDecoration: task.completed
            ? "line-through"
            : "none",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        {task.text}
      </span>

      <button onClick={() => deleteTask(index)}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;