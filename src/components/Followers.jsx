const Followers = ({ theme, user }) => {
  const { public_repos, followers, following } = user;

  return (
    <div id="followers" className={ theme }>
      <div>
        <h3>Repos</h3>
        <span>{ public_repos }</span>
      </div>
      <div>
        <h3>Followers</h3>
        <span>{ followers }</span>
      </div>
      <div>
        <h3>Following</h3>
        <span>{ following }</span>
      </div>
    </div>
  )
}
export default Followers;