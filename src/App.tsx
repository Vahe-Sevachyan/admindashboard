import "./App.css";
import MainDisplay from "./layouts/MainDisplay";
import NavBar from "./layouts/NavBar";
import SideBar from "./layouts/SideBar";

function App() {
  return (
    <div className="main-wrapper">
      <SideBar className="sidebar-child" />
      <NavBar className="navbar-child" />
      <MainDisplay className="main-display-wrapper" />
    </div>
  );
}

export default App;

// .parent {
// display: grid;
// grid-template-columns: repeat(5, 1fr);
// grid-template-rows: repeat(5, 1fr);
// grid-column-gap: 0px;
// grid-row-gap: 0px;
// }

// .div1 { grid-area: 1 / 1 / 3 / 2; }
// .div2 { grid-area: 3 / 1 / 4 / 2; }
// .div3 { grid-area: 4 / 1 / 5 / 2; }
// .div4 { grid-area: 1 / 1 / 6 / 2; }
// .div5 { grid-area: 1 / 2 / 2 / 6; }
// .div6 { grid-area: 2 / 2 / 6 / 6; }

{
  /* <div class="parent">
<div class="div1"> </div>
<div class="div2"> </div>
<div class="div3"> </div>
<div class="div4"> </div>
<div class="div5"> </div>
<div class="div6"> </div>
</div> */
}
