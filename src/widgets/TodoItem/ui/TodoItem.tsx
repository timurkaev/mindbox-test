import { FC } from "react";
import { Todo } from "../../../features/todo/types/todo.types";
import { useTodo } from "../../../features/todo";

interface TodoItemProps {
    todo: Todo;
}

export const TodoItem: FC<TodoItemProps> = ({ todo }): JSX.Element => {
    const { toggleTodo, deleteTodo } = useTodo();

    const handleToggleTodo = (id: number) => {
        if (toggleTodo) {
            toggleTodo(id);
        }
    };

    const handleDeleteTodo = (id: number) => {
        const confirm = window.confirm("Are you sure you want to delete the todo");
        if (deleteTodo && confirm) {
            deleteTodo(id);
        }
    };

    return (
        <li key={todo.id} className="h-14 border-b">
            <div>
                <label className="cursor-pointer label">
                    <input
                        type="checkbox"
                        className="checkbox checkbox-accent"
                        checked={todo.done}
                        onChange={() => handleToggleTodo(todo.id)}
                    />
                </label>
                <span className={`text-lg ${todo.done ? "line-through" : ""}`}>{todo.text}</span>
                <button
                    className="btn btn-outline btn-error btn-sm"
                    onClick={() => handleDeleteTodo(todo.id)}
                >
                    Delete
                </button>
            </div>
        </li>
    );
};
