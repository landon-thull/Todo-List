import React from "react";
import "./App.scss";


function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"
    >
      <div>
        <span className={todo.isDone ? "done" : "not-done"}>{todo.text}</span>
      </div>
      <div className="button-container">
        <button className="btn-done" onClick={() => markTodo(index)}>✓</button>
        <button className="btn-delete" onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form"> 
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
    <button className="button-submit" type="submit">
      Submit
    </button>
  </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {
      text: text,
      isDone: false,
    }];
    console.log(newTodos)
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div className="content">
          {todos.map((todo, index) => (
            <div>
              <div>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
