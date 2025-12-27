import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ tasks, deleteTask, toggleTodoCompleted }) => {
  const isHasTasks = tasks && tasks.length > 0;

  if (!isHasTasks) {
    return <div className="todo__empty-message">Todos list is empty</div>;
  }

  return (
    <>
      <ul className="todo__list">
        {tasks.map((task) => (
          <TodoItem
            className="todo__item"
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTodoCompleted={toggleTodoCompleted}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
