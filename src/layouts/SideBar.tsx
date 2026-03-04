import SideBarLink from "../components/PageLink";
import "../styles/SideBar.css";
interface SideBarProp {
  className?: string;
}
function SideBar({ claassName = "" }: SideBarProp) {
  return (
    <section className="sidebar-wrapper">
      <div className="pageLinks">
        <SideBarLink>{<a href="">Home</a>}</SideBarLink>
        <SideBarLink>{<a href="">Profile</a>}</SideBarLink>
        <SideBarLink>{<a href="">Messages</a>}</SideBarLink>
        <SideBarLink>{<a href="">History</a>}</SideBarLink>
        <SideBarLink>{<a href="">Task</a>}</SideBarLink>
        <SideBarLink>{<a href="">Communities</a>}</SideBarLink>
      </div>
      <div className="supportLinks">
        <SideBarLink>{<a href="">Settings</a>}</SideBarLink>
        <SideBarLink>{<a href="">Support</a>}</SideBarLink>
        <SideBarLink>{<a href="">Privacy</a>}</SideBarLink>
      </div>
    </section>
  );
}

export default SideBar;
