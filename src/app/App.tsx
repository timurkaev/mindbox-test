import { FC } from "react";
import { useTheme } from "../features/theme";
import { ToggleTheme } from "../widgets/ToggleTheme";
import { TodoInput } from "../widgets/TodoInput";
import { TodoList } from "../widgets/TodoList";
import "./styles/index.css";

export const App: FC = (): JSX.Element => {
    const { theme } = useTheme();

    return (
        <div className="w-screen h-screen p-2" data-theme={theme}>
            <div className="w-[600px] m-auto">
                <ToggleTheme />
            </div>
            <div className="w-[600px] m-auto mt-7">
                <h1 className="text-6xl font-light text-center text-[#e9d9d8]">todos</h1>
                <TodoInput />
                <TodoList />
            </div>
        </div>
    );
};
