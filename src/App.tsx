import TodoForm from "./component/TodoForm";
import Todo from "./component/Todo";
import { useState } from "react";
import "./todos.css";

export interface TodoItem {
  id: number;
  text?: string;
  isComplete?: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([
    {
      id: 1,
      text: "hello",
      isComplete: false,
    },
  ]);

  const addTodo = (todo: TodoItem): void => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos: TodoItem[] = [todo, ...todos];

    setTodos(newTodos);
  };

  const removeTodo = (id: number): void => {
    const removeArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id: number): void => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div>
      <div className="todo-app">
        <h1>To Do List</h1>
        <h2>오늘은 무슨 일을 계획하나요?</h2>
        <TodoForm todos={todos} onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
}

export default App;
