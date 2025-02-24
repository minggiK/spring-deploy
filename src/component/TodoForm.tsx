import { ChangeEvent, FormEvent } from "react";
import { useState, useEffect, useRef } from "react";
import { TodoItem } from "../App";

type TodoFormProps = {
  onSubmit: (todo: TodoItem) => void;
  todos: TodoItem[];
};

const TodoForm = ({ onSubmit, todos }: TodoFormProps) => {
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const idNumber = 0 | todos[0]?.id;

    onSubmit({
      id: Number(idNumber + 1),
      text: input,
    });

    setInput("");
  };

  return (
    <form id="todoForm" className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
};

export default TodoForm;
