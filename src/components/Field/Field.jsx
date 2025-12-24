const Field = ({
  type = "text",
  placeholder = "",
  label = "",
  value = "",
  onChange,
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
      />
    </div>
  );
};

export default Field;
