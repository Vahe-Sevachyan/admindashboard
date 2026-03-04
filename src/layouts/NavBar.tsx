import Button from "../components/Button";
import "../styles/Navbar.css";
interface NavbarBarProp {
  className?: string;
}
function NavBar({ claassName = "" }: NavbarBarProp) {
  return (
    <div className="navbar-wrapper">
      <Button>{<span>New</span>}</Button>
      <Button>{<span>Upload</span>}</Button>
      <Button>{<span>Share</span>}</Button>
    </div>
  );
}
export default NavBar;
