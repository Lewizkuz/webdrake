import { PropTypes } from "prop-types";

export function ImageSection({ src, alt, ...other }) {
  return (
    <section>
      <div>
        <img
          src={src}
          alt={alt}
          style={{
            maxWidth: "300px",
          }}
          {...other}
        />
      </div>
      <span>{alt}</span>
    </section>
  );
}

ImageSection.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
