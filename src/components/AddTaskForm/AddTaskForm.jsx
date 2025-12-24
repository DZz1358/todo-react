import Field from "../Field/Field";
import Button from "../Button/Button";
const AddTasksForm = () => {
  return (
    <form className="todo__form">
      <Field className="todo__field" id="new-task" label="New task" />
      <Button className="button" type="submit">
        Add
      </Button>
    </form>
  );
};

export default AddTasksForm;
