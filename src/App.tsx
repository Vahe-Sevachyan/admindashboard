import "./App.css";
import MainDisplay from "./layouts/MainDisplay";
import NavBar from "./layouts/NavBar";
import SideBar from "./layouts/SideBar";

function App() {
  return (
    <div className="main-wrapper">
      <div className="dashboard-container">
        <section className="sidebar-wrapper">
          <SideBar />
        </section>

        <section className="main-content">
          <NavBar className="navbar-child" />
          <MainDisplay className="main-display-wrapper" />
        </section>
      </div>
    </div>
  );
}

export default App;
