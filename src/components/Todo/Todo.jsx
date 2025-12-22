import AddTasksForm from "../AddTaskForm/AddTaskForm";
import TodoList from "../TodoList/TodoList";
import TodosInfo from "../TodosInfo/TodosInfo";

const Todo = () => {
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTasksForm />
      <form className="todo__form">
        <div className="todo__field field">
          <label className="field__label" htmlFor="search-task">
            Search task
          </label>
          <input
            className="field__input"
            id="search-task"
            placeholder=" "
            autoComplete="off"
            type="search"
          />
        </div>
      </form>

      <TodosInfo />
      <TodoList />
    </div>
  );
};
export default Todo;
