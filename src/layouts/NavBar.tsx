import Button from "../components/Button";
import UserProfile from "../components/UserProfile";
import "../styles/Navbar.css";
interface NavbarBarProps {
  className?: string;
}
function NavBar({ claassName = "" }: NavbarBarProps) {
  return (
    <div className="navbar-wrapper">
      <div className="nav-top-section">
        <input type="text" />
        <span>
          <UserProfile username="Morgan Oakley" useravatar="" />
        </span>
      </div>
      <div className="nav-bottom-section">
        <UserProfile username="Morgan Oakley" useravatar="" />
        <div className="button-wrapper">
          <Button>{"New"}</Button>
          <Button>{"Upload"}</Button>
          <Button>{"Share"}</Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
