const Button = (props) => {
  const { className, children, type = "button" } = props;

  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
};
export default Button;
