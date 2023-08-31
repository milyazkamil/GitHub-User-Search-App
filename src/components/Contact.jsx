import BuildingSvg from "./SvgComponents/BuildingSvg";
import LinkSvg from "./SvgComponents/LinkSvg";
import TwitterSvg from "./SvgComponents/TwitterSvg";
import LocationSvg from "./SvgComponents/LocationSvg";

const Contact = ({ theme, user }) => {
  const { location, html_url, company, twitter_username } = user;
  return (
    <div id="contact">
      <div>
        <span>
          <LocationSvg theme={theme} />
          { location === null ? 'Not Available' : location }
        </span>
        <span>
          <BuildingSvg theme={theme} />
          { company === null ? 'Not Available' : company }
        </span>
      </div>
      <div>
        <span>
          <LinkSvg theme={theme} />
          <a href={html_url} target="_blank">
            https://www.github.com
          </a>
        </span>
        <span>
          <TwitterSvg theme={theme} />
          { twitter_username === null ? 'Not Available' : twitter_username }
        </span>
      </div>
    </div>
  )
}
export default Contact;