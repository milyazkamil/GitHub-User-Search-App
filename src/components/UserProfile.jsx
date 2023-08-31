const UserProfile = ({ user }) => {
  const { name, html_url, login, avatar_url, bio } = user;
  return (
    <div id="user-profile">
      <div>
        <img
          id="user-photo"
          src={avatar_url}
          alt="user photo"
        />
        <div id="name-container">
          <h2>{name === null ? "Name Not Available" : name}</h2>
          <a href={html_url} target="_blank">@{login}</a>
          <span>{bio === null ? " Bio Not Available" : bio}</span>
        </div>
      </div>
    </div>
  )
}
export default UserProfile;