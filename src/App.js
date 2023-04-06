import "./App.css";
import Counter from "./components/Counter";
import ToDoList from "./components/Listing";

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
