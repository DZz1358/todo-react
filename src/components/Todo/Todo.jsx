import AddTasksForm from "../AddTaskForm/AddTaskForm";
import TodoList from "../TodoList/TodoList";
import TodosInfo from "../TodosInfo/TodosInfo";
import Field from "../Field/Field";

const Todo = () => {
  const tasks = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a ToDo App", completed: true },
    { id: 3, text: "Deploy the app", completed: false },
    { id: 4, text: "Drink coffee", completed: true },
  ];

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTasksForm />
      <form className="todo__form">
        <Field
          label="Search task"
          className="todo__field"
          id="search-task"
          type="search"
        />
      </form>

      <TodosInfo
        total={tasks.length}
        done={tasks.filter(({ completed }) => completed).length}
      />
      <TodoList tasks={tasks} />
    </div>
  );
};
export default Todo;
