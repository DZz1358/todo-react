const Field = ({
  type = "text",
  placeholder = "",
  label = "",
  value = "",
  onInput,
  id,
  className,
}) => {
  return (
    <div className={`field ${className}`}>
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        className="field__input"
        id={id}
        placeholder={placeholder}
        autoComplete="off"
        onInput={onInput}
        value={value}
      />
    </div>
  );
};

export default Field;
