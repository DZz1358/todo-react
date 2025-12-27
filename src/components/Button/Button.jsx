const Button = (props) => {
  const { className, children, type = "button", onClick } = props;

  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
