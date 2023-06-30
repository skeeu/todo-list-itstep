import Header from "./components/Header/Header";
import TaskInput from "./components/TaskInput/TaskInput";
import TasksGrid from "./components/TasksGrid/TasksGrid";
import './global.css'


function App() {
  return (
    <>
      <Header />
      <TaskInput />
      <TasksGrid />
    </>
  );
}

export default App;
