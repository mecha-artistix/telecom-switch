import { Children } from "react";

function Button({ onClick, children }) {
  return <button onClick={onClick}>{Children}</button>;
}

export default Button;
