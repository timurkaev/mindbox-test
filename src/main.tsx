import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App.tsx";
import { ThemeProvider } from "./features/theme/index.ts";
import { TodoProvider } from "./features/todo/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider>
            <TodoProvider>
                <App />
            </TodoProvider>
        </ThemeProvider>
    </React.StrictMode>,
);
