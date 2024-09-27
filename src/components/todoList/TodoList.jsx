export const TodoList = (props) => {
  return (
    <div className="container border h-75 d-flex justify-content-center align-items-center">
      {props.children}
    </div>
  );
};
