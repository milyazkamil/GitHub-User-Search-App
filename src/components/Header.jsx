import { useState } from "react";
import SunSvg from "./SvgComponents/SunSvg";
import MoonSvg from "./SvgComponents/MoonSvg";

const Header = ({ theme, sendDataToApp }) => {
  const [darkMode, setDarkMode] = useState(false);

  const sendData = () => {
    setDarkMode(!darkMode);
    // Call the function from the parent and pass data as an argument
    sendDataToApp(darkMode);
  }

  return (
    <header id="header">
      <h1 id="logo" className={ theme }>DevFinder</h1>
      <button id="dark-mode" className={ theme } onClick={sendData} type="button">
        { theme === "light" ? "Dark" : "Light" }
        { theme === "light" ? <span><MoonSvg /></span> : <span><SunSvg /></span> }
      </button>
    </header>
  )
}
export default Header;