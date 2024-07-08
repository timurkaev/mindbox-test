export interface Todo {
    id: number;
    text: string;
    done: boolean;
}

export enum Filters {
    All = "All",
    Active = "Active",
    Completed = "Completed",
}

export interface TodoContextProps {
    todos?: Todo[];
    filters?: Filters;
    addTodo?: (text: string) => void;
    deleteTodo?: (id: number) => void;
    toggleTodo?: (id: number) => void;
    handleFilterAll?: () => void;
    handleFilterActive?: () => void;
    handleFilterCompleted?: () => void;
    handleClearCompleted?: () => void;
}
