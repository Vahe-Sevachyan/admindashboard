import type { ReactNode } from "react";
interface PageRouteProps {
  children: ReactNode;
}
function PageRoute({ children }: PageRouteProps) {
  return <span className="link__body">{children}</span>;
}
export default PageRoute;
