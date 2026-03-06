import type { ReactNode } from "react";
interface LinkProps {
  children: ReactNode;
}
function AnchorLink({ children }: LinkProps) {
  return <span className="link__body">{children}</span>;
}
export default AnchorLink;
