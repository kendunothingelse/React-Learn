import React, { useState } from "react";
function TodoApp() {
    const [todos, setTodos] = useState([]);// Initial state: empty array
    const [inputValue, setInputValue] = useState('');// State to manage input value

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, inputValue]);// Update state with new todo
            setInputValue('');// Clear input field
        }
    };
    return (
        <div>
            <h1>Todo List</h1>
            <input type="text" value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}  // Update input value state
                />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>// Render list of todos
                ))}
            </ul>
        </div>
    )
}
export default TodoApp;