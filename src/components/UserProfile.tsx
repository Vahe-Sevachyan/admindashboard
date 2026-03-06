interface UserProfileProps {
  username: string;
  useravatar: string;
}
function UserProfile({ username, useravatar }: UserProfileProps) {
  return (
    <div>
      <img src={useravatar} alt="" />
      <h4>{username}</h4>
    </div>
  );
}

export default UserProfile;
