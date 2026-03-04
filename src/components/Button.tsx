import type { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps) {
  return <button className="button__body">{children}</button>;
}

export default Button;
