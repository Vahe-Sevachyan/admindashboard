import "../styles/MainDisplay.css";
import Card from "../components/Card";
// interface MainDisplayProp {
//   className?: string;
// }
function MainDisplay() {
  return (
    <div className="main-display-wrapper">
      <div>
        <Card title="test two" description="this is a description">
          tests
        </Card>
      </div>
    </div>
  );
}

export default MainDisplay;
