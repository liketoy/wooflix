import PropTypes from "prop-types";

export function makeImagePath(id, format) {
  return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
}

makeImagePath.propTypes = {
  id: PropTypes.string.isRequired,
  format: PropTypes.string,
};
