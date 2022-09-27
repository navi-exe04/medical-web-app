import { Link } from "react-router-dom";

export const GeneralLink = ({
  toUrl = "",
  additionalClass = "",
  textContent = "",
}) => {
  return (
    <Link to={toUrl} className={"link " + additionalClass}>
      {textContent}
    </Link>
  );
};
