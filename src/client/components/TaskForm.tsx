import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// TYPES
import { Task } from "../types";

interface Props {
    newTask: (task: Task) => void;
}

function TaskForm({ newTask }: Props) {
    const [inputValue, setInputValue] = useState("");

    let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        newTask({
            id: uuidv4(),
            title: inputValue,
        });
        setInputValue("");
    };

    let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add your task"
                value={inputValue}
                onChange={handleChange}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TaskForm;
