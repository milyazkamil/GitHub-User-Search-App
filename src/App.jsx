import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SearchBar from "./components/SearchBar";
import userNotFound from "./assets/images/user-not-found.png"

function App() {
  const [user, setUser] = useState({});
  const [theme, setTheme] = useState('light');
  const [darkOrLight, setDarkOrLight] = useState(true);
  const [dataFromInput, setDataFromInput] = useState('milyazkamil');

  // Function to get data from the child
  const getDataFromInput = (data) => {
    // Update the state or perform actions with the data
    setDataFromInput(data);
  }
  
  const darkModeInfo = (themeInfo) => {
    setDarkOrLight(themeInfo);
  };

  useEffect(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }, [darkOrLight]);

  //fetch data from github api
  const url = `https://api.github.com/users/${dataFromInput}`;
  useEffect(() => {
    const fetchUser = async (githubUrl) => {
      try {
        const resp = await fetch(githubUrl);

        if (resp.status === 404) {
          // Handle the case where the user does not exist
          setUser({
            name: `User named ${dataFromInput} was not found`,
            login: 'anonymous',
            twitter_username: 'Not Available',
            company: 'Not Available',
            location: 'Not Available',
            bio: 'Not Available',
            public_repos: '0',
            followers: '0',
            following: '0',
            avatar_url: userNotFound, // Provide a URL to a default image
          });
        } else {
          const data = await resp.json();
          setUser(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser(url);
  }, [dataFromInput]);

  return (
    <>
      <main id="main" className={theme}>
        <section id="sub-main">
          <Header theme={theme} sendDataToApp={darkModeInfo} />
          <SearchBar
            theme={theme}
            sendDataToApp={getDataFromInput}
          />
          <MainContent
            theme={theme}
            user={user}
          />
        </section>
      </main>
    </>
  )
}
export default App;
