import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import { TodoContext } from "../context/todo.context";
import { Filters, Todo } from "../types/todo.types";

interface TodoProviderProps {
    children: ReactNode;
}

export const TodoProvider: FC<TodoProviderProps> = ({ children }): JSX.Element => {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            return JSON.parse(savedTodos);
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const [filters, setFilter] = useState<Filters>(Filters.All);

    const addTodo = (text: string): void => {
        const newTodo: Todo = {
            id: Date.now(),
            text: text,
            done: false,
        };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };

    const deleteTodo = (id: number): void => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const toggleTodo = (id: number): void => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id
                    ? {
                          ...todo,
                          done: !todo.done,
                      }
                    : todo,
            ),
        );
    };

    const filteredTodos = useMemo((): Todo[] => {
        switch (filters) {
            case Filters.Active:
                return todos.filter((todo) => !todo.done);
            case Filters.Completed:
                return todos.filter((todo) => todo.done);
            default:
                return todos;
        }
    }, [filters, todos]);

    const handleFilterAll = (): void => setFilter(Filters.All);
    const handleFilterActive = (): void => setFilter(Filters.Active);
    const handleFilterCompleted = (): void => setFilter(Filters.Completed);

    const handleClearCompleted = (): void => {
        setTodos((prevTodos) => prevTodos.filter((todo) => !todo.done));
    };

    return (
        <TodoContext.Provider
            value={{
                todos: filteredTodos,
                filters,
                addTodo,
                deleteTodo,
                toggleTodo,
                handleFilterAll,
                handleFilterActive,
                handleFilterCompleted,
                handleClearCompleted,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
