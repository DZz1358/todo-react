import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const isHasTasks = true;

  if (!isHasTasks) {
    return <div className="todo__empty-message"></div>;
  }

  return (
    <div>
      <ul className="todo__list">
        <TodoItem />
      </ul>
    </div>
  );
};

export default TodoList;
