import { createContext } from "react";
import { TodoContextProps } from "../types/todo.types";

export const TodoContext = createContext<TodoContextProps>({});
