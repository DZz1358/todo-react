import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ tasks }) => {
  const isHasTasks = tasks && tasks.length > 0;
  console.log("tasks", tasks);

  if (!isHasTasks) {
    return <div className="todo__empty-message"></div>;
  }

  return (
    <>
      <ul className="todo__list">
        {tasks.map((task) => (
          <TodoItem className="todo__item" key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
