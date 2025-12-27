import AddTasksForm from "../AddTaskForm/AddTaskForm";
import TodoList from "../TodoList/TodoList";
import TodosInfo from "../TodosInfo/TodosInfo";
import Field from "../Field/Field";
import { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a ToDo App", completed: true },
    { id: 3, text: "Deploy the app", completed: false },
    { id: 4, text: "Drink coffee", completed: true },
  ]);

  const [newTaskValue, setNewTaskValue] = useState("");

  const toggleTodoCompleted = (taskId, isComplete) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: isComplete } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const deleteAllTask = () => {
    setTasks([]);
  };

  const addNewTask = () => {
    if (newTaskValue.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        text: newTaskValue,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskValue("");
    }
  };

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTasksForm
        addNewTask={addNewTask}
        newTaskValue={newTaskValue}
        setNewTaskValue={setNewTaskValue}
      />
      <form className="todo__form">
        <Field
          label="Search task"
          className="todo__field"
          id="search-task"
          type="search"
          value=""
        />
      </form>

      <TodosInfo
        total={tasks.length}
        done={tasks.filter(({ completed }) => completed).length}
        deleteAllTask={deleteAllTask}
      />
      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTodoCompleted={toggleTodoCompleted}
      />
    </div>
  );
};
export default Todo;
