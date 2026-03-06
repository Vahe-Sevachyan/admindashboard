interface UserProfileProps {
  username: string;
  useravatar: string;
}
function UserProfile({ username, useravatar }: UserProfileProps) {
  return (
    <div className="userprofile-wrapper">
      <img src={useravatar} />
      <h4>{username}</h4>
    </div>
  );
}

export default UserProfile;
