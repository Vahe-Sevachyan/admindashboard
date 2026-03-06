import "../styles/MainDisplay.css";
interface MainDisplayProp {
  className?: string;
}
function MainDisplay({ className = "" }: MainDisplayProp) {
  return (
    <div className="main-display-wrapper">
      <p>test</p>
    </div>
  );
}

export default MainDisplay;
