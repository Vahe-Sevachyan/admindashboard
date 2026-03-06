import type { ReactNode } from "react";
interface LinkProps {
  children: ReactNode;
}
function SideBarLink({ children }: LinkProps) {
  return <span className="link__body">{children}</span>;
}
export default SideBarLink;
