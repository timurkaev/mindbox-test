import { FC } from "react";
import { useTodo } from "../../../features/todo";
import { TodoFooter } from "../../TodoFooter";
import { TodoItem } from "../../TodoItem";

export const TodoList: FC = (): JSX.Element => {
    const { todos, filters } = useTodo();
    const isTodos = todos !== undefined;

    const isEmptyList = () => {
        if (filters === "All" && todos?.length === 0) {
            return (
                <div className="text-3xl h-14 flex justify-center items-center">
                    You don't have any todos!
                </div>
            );
        } else if (filters === "Active" && todos?.length === 0) {
            return (
                <div className="text-3xl h-14 flex justify-center items-center">
                    You don't have active todos!
                </div>
            );
        } else if (filters === "Completed" && todos?.length === 0) {
            return (
                <div className="text-3xl h-14 flex justify-center items-center">
                    You don't have completed todos!
                </div>
            );
        }
    };

    return (
        <ul className="menu bg-base-200 w-full rounded-box mt-10">
            {isTodos
                ? todos.length !== 0
                    ? todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
                    : isEmptyList()
                : null}
            <TodoFooter />
        </ul>
    );
};
