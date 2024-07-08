import { FC } from "react";
import { useTodo } from "../../../features/todo";
import { Filters } from "../../../features/todo/types/todo.types";

const filtersList = [{ name: "All" }, { name: "Active" }, { name: "Completed" }];

export const TodoFooter: FC = (): JSX.Element => {
    const {
        todos,
        filters,
        handleFilterAll,
        handleFilterActive,
        handleFilterCompleted,
        handleClearCompleted,
    } = useTodo();

    const handleFilters = (filter: string): void => {
        if (filter === Filters.All && handleFilterAll) {
            handleFilterAll();
        } else if (filter === Filters.Active && handleFilterActive) {
            handleFilterActive();
        } else if (filter === Filters.Completed && handleFilterCompleted) {
            handleFilterCompleted();
        }
    };

    const handleClearCompletedTodos = () => {
        const confirm = window.confirm("Are you sure you want to delete all notes");
        if (handleClearCompleted && confirm) {
            handleClearCompleted();
        }
    };

    return (
        <div className="h-14 flex items-center justify-between text-base">
            <span>{todos?.length} items left</span>
            <div className="w-44 flex justify-between items-center">
                {filtersList.map((filter) => (
                    <span
                        key={filter.name}
                        className={`${
                            filters === filter.name ? "border" : ""
                        } px-2 py-1 rounded cursor-pointer mr-2`}
                        onClick={() => handleFilters(filter.name)}
                    >
                        {filter.name}
                    </span>
                ))}
            </div>
            <span className="cursor-pointer" onClick={handleClearCompletedTodos}>
                Clear completed
            </span>
        </div>
    );
};
