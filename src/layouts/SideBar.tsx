import PageRoute from "../components/PageRoute";
import "../styles/SideBar.css";
// interface SideBarProp {
//   className?: string;
// }
function SideBar() {
  return (
    <section className="sidebar">
      <div className="pageLinks">
        <PageRoute>{<a href="">Home</a>}</PageRoute>
        <PageRoute>{<a href="">Profile</a>}</PageRoute>
        <PageRoute>{<a href="">Messages</a>}</PageRoute>
        <PageRoute>{<a href="">History</a>}</PageRoute>
        <PageRoute>{<a href="">Task</a>}</PageRoute>
        <PageRoute>{<a href="">Communities</a>}</PageRoute>
      </div>
      <div className="supportLinks">
        <PageRoute>{<a href="">Settings</a>}</PageRoute>
        <PageRoute>{<a href="">Support</a>}</PageRoute>
        <PageRoute>{<a href="">Privacy</a>}</PageRoute>
      </div>
    </section>
  );
}

export default SideBar;
