import { useState } from "react";
function TaskItem({
  task,
  index,
  deleteTask,
  toggleTask,
  editTask,
  updateTask,
}) {
  const [editInput, setEditInput] = useState(task.text);
 return (
  <li>
    {task.isEditing ? (
      <>
        <input
          type="text"
          value={editInput}
          onChange={(e) =>
            setEditInput(e.target.value)
          }
        />

        <button
          onClick={() => updateTask(index, editInput)}
        >
          Save
        </button>
      </>
    ) : (
      <>
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

        <button onClick={() => editTask(index)}>
          Edit
        </button>
      </>
    )}

    <button onClick={() => deleteTask(index)}>
      Delete
    </button>
  </li>
);
}

export default TaskItem;