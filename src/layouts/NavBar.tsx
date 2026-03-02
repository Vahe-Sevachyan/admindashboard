import Button from "../components/Button";
function NavBar() {
  return (
    <div>
      <Button>{<span>New</span>}</Button>
      <Button>{<span>Upload</span>}</Button>
      <Button>{<span>Share</span>}</Button>
    </div>
  );
}
export default NavBar;
