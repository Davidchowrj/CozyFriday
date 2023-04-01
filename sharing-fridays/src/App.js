import "./App.css";
import Counter from "./containers/Counter";
import ToDoList from "./containers/ToDoList";

function App() {
  return (
    <div className="container">
      <div>
        <Counter />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
