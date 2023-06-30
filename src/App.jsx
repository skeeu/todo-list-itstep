import Header from "./components/Header/Header";
import TasksGrid from "./components/TasksGrid/TasksGrid";
import "./global.css";

function App() {
  return (
    <>
      <Header title='Todo' />
      <TasksGrid />
    </>
  );
}

export default App;
