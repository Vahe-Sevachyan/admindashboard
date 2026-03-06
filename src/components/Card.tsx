import type { ReactNode } from "react";
interface CardProps {
  children: ReactNode;
  title: string;
  description: string;
}

function Card({ children, title, description }: CardProps) {
  return (
    <div>
      {children}
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
}
export default Card;
