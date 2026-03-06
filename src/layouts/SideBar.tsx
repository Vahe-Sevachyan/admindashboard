import AnchorLink from "../components/AnchorLink";
import "../styles/SideBar.css";
interface SideBarProp {
  className?: string;
}
function SideBar({ className = "" }: SideBarProp) {
  return (
    <section className="sidebar-wrapper">
      <div className="pageLinks">
        <AnchorLink>{<a href="">Home</a>}</AnchorLink>
        <AnchorLink>{<a href="">Profile</a>}</AnchorLink>
        <AnchorLink>{<a href="">Messages</a>}</AnchorLink>
        <AnchorLink>{<a href="">History</a>}</AnchorLink>
        <AnchorLink>{<a href="">Task</a>}</AnchorLink>
        <AnchorLink>{<a href="">Communities</a>}</AnchorLink>
      </div>
      <div className="supportLinks">
        <AnchorLink>{<a href="">Settings</a>}</AnchorLink>
        <AnchorLink>{<a href="">Support</a>}</AnchorLink>
        <AnchorLink>{<a href="">Privacy</a>}</AnchorLink>
      </div>
    </section>
  );
}

export default SideBar;
