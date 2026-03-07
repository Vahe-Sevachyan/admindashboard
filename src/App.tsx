import "./App.css";
import MainDisplay from "./layouts/MainDisplay";
import NavBar from "./layouts/NavBar";
import SideBar from "./layouts/SideBar";
import styled from "styled-components";

const UIContainer_ = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const DashBoardWrapper_ = styled.div`
  display: flex;
  width: 1200px;
  height: 800px;
`;
const SideBarWrapper_ = styled.section`
  background-color: rgb(63, 170, 236);
  max-width: 20%;
  min-width: 150px;
`;
const MainDisplayWrapper_ = styled.section`
  width: 100%;
  background-color: rgb(77, 135, 135);
`;

function App() {
  return (
    <UIContainer_>
      <DashBoardWrapper_>
        <SideBarWrapper_>
          <SideBar />
        </SideBarWrapper_>

        <MainDisplayWrapper_>
          <NavBar className="navbar-child" />
          <MainDisplay className="main-display-wrapper" />
        </MainDisplayWrapper_>
      </DashBoardWrapper_>
    </UIContainer_>
  );
}

export default App;
