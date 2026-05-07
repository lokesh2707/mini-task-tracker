function TaskForm({ input, setInput, addTask }) {
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTask}>
        Add
      </button>
    </div>
  );
}

export default TaskForm;