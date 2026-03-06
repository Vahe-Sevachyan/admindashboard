import Button from "../components/Button";
import "../styles/Navbar.css";
interface NavbarBarProp {
  className?: string;
}
function NavBar({ claassName = "" }: NavbarBarProp) {
  return (
    <div className="navbar-wrapper">
      <Button>{"New"}</Button>
      <Button>{"Upload"}</Button>
      <Button>{"Share"}</Button>
    </div>
  );
}

export default NavBar;
