import React, { useState } from "react";
import TaskList from "./TaskList";

export default function TaskApp() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = () => {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), text: trimmedText },
    ]);
    setText("");
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleClearAll = () => {
    setTasks([]);
  };

  return (
    <section className="card">
      <div className="inputRow">
        <input
          type="text"
          placeholder="Type a task..."
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
        <button className="btn btn--primary" onClick={handleSubmit}>
          Submit
        </button>
        {text}
      </div>

      <TaskList tasks={tasks} onDelete={handleDelete} />

      <div className="footerRow">
        <button className="btn btn--ghost" onClick={handleClearAll}>
          Clear All
        </button>
      </div>
    </section>
  );
}
