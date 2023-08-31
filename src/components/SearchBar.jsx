import { useState } from "react";
import SearchSvg from "./SvgComponents/SearchSvg";

const SearchBar = ({ theme, sendDataToApp }) => {

  const [dataToSend, setDataToSend] = useState('');

  const sendData = () => {
    // Call the function from the parent and pass data as an argument
    sendDataToApp(dataToSend);
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') { 
      e.preventDefault();
      sendData();
    }
  };

  return (
    <form id="search-bar">
      <span>
        <SearchSvg theme={theme} />
      </span>
      <input
        autoComplete="off"
        className={theme}
        value={dataToSend}
        onChange={(e) => setDataToSend(e.target.value)}
        onKeyDown={handleEnterKeyPress}
        id="search-input"
        name="user-name"
        type="text"
        placeholder="Search Github Users..."
      />
      <button onClick={sendData} id="search-button" type="button">
        Search
      </button>
    </form>
  )
}
export default SearchBar;