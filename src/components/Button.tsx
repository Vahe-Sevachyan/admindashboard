import type { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children: ReactNode;
}
const Button_ = styled.button`
  color: white;
  background-color: rgb(63, 170, 236);
  border: none;
  padding: 7px;
  width: 80px;
  border-radius: 15px;
  &:hover {
    background-color: rgb(62, 123, 161);
    cursor: pointer;
  }
`;
function Button({ children }: ButtonProps) {
  return <Button_ className="button__body">{children}</Button_>;
}

export default Button;
