import Contact from "./Contact";
import Followers from "./Followers";
import UserProfile from "./UserProfile";

const MainContent = ({ theme, user }) => {
  return (
    <section id="main-content" className={`main-content ${theme}`}>
      <UserProfile user={user} />
      <Followers theme={theme} user={user} />
      <Contact theme={theme} user={user} />
    </section>
  )
}
export default MainContent;