import Button from "../Button/Button";

const TodosInfo = (props) => {
  const { total, done } = props;

  const hasTasks = total > 0;

  return (
    <div className="todo__info">
      <div className="todo__total-tasks">
        Done tasks: {done} from {total}
      </div>
      {hasTasks && (
        <Button className="todo__delete-all-button" type="button">
          Delete all
        </Button>
      )}
    </div>
  );
};

export default TodosInfo;
