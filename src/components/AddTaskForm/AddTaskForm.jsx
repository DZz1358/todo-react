import Field from "../Field/Field";
import Button from "../Button/Button";
const AddTasksForm = (props) => {
  const { addNewTask, newTaskValue, setNewTaskValue } = props;
  return (
    <form className="todo__form">
      <Field
        className="todo__field"
        id="new-task"
        label="New task"
        value={newTaskValue}
        onInput={(event) => setNewTaskValue(event.target.value)}
      />
      <Button
        className="button"
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          addNewTask("New task");
        }}
      >
        Add
      </Button>
    </form>
  );
};

export default AddTasksForm;
