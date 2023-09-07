import { FC, useState, useCallback, ChangeEvent } from "react";
import { useTodo } from "../../../features/todo";

export const TodoInput: FC = (): JSX.Element => {
    const [text, setText] = useState<string>("");
    const { addTodo, todos } = useTodo();
    const [isNonDuplicateError, setIsNonDuplicateError] = useState<boolean>(false);

    const handleAddTodo = useCallback(() => {
        const find = todos?.find((todo) => (todo.text === text ? todo.text : undefined));
        if (addTodo && !find) {
            addTodo(text);
            setText("");
            setIsNonDuplicateError(false);
        } else {
            setIsNonDuplicateError(true);
        }
    }, [addTodo, text]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { target } = e;
        setText(target.value);
    };

    return (
        <form onSubmit={(e) => e.preventDefault()} className="mt-10">
            <div className="flex justify-between">
                <input
                    type="text"
                    placeholder="What needs to be done?"
                    className={`input input-bordered ${
                        isNonDuplicateError ? "input-error" : "input-success"
                    } w-9/12`}
                    value={text}
                    onChange={handleInputChange}
                />
                <button className="btn btn-accent" onClick={handleAddTodo} disabled={!text}>
                    Add todo
                </button>
            </div>
            {isNonDuplicateError ? (
                <div className="alert alert-error mt-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>Error! This note already exists.</span>
                </div>
            ) : null}
        </form>
    );
};
