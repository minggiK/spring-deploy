import { TodoItem } from "../App";

interface TodoProps {
  todos: TodoItem[];
  completeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const Todo = ({ todos, completeTodo, removeTodo }: TodoProps) => {
  return (
    <div className="wrapper-todo">
      {todos.map(todo => {
        const todoClass = todo.isComplete ? "todo-row complete" : "todo-row";

        return (
          <div className={todoClass} key={todo.id}>
            <div onClick={() => completeTodo(todo.id)}>{todo.text}</div>
            <div className="icons">
              <i
                className="fas fa-times delete-icon"
                onClick={() => removeTodo(todo.id)}
              ></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
