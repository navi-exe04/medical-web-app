import PropTypes from "prop-types";

export const HeaderOptionMenu = ({
  url = "",
  additionalClass = "",
  textContent = "",
}) => {
  return (
    <li className={"menu-li " + additionalClass}>
      <a href={url} className={"menu-li__option"}>
        {textContent}
      </a>
    </li>
  );
};

HeaderOptionMenu.propTypes = {
  url: PropTypes.string.isRequired,
  additionalClass: PropTypes.string,
  textContent: PropTypes.string.isRequired,
};
