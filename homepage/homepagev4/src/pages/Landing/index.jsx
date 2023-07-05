import { useState } from "react";
import { PropTypes } from "prop-types";
import "./landing.css";
const DynamicImage = ({ url, alt }) => (
  <img src={url} alt={alt || "dynamicImages"} />
);
DynamicImage.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export const Landing = () => {
  const [toggleImage, setToggleImage] = useState("neutral");
  const handleImageToggle = (setValue) => () => {
    setToggleImage(setValue);
  };
  return (
    <main className="landing-main">
      <div>
        <DynamicImage url={toggleImage} alt={toggleImage} />
      </div>
      <a
        href={window.location.href + "tech"}
        onMouseOver={handleImageToggle("tech")}
        onMouseLeave={handleImageToggle("netural")}
      >
        Tech
      </a>
      <a
        href={window.location.href + "art"}
        onMouseOver={handleImageToggle("art")}
        onMouseLeave={handleImageToggle("netural")}
      >
        Art
      </a>

      <p>@Leevi Kukkonen 2023</p>
    </main>
  );
};
