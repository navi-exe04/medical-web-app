export const GridItem = ({
  additionalClass = "",
  imgContent,
  imgDescription = "",
  textContent = "",
}) => {
  return (
    <div className={"grid__item " + additionalClass}>
      <img src={imgContent} alt={imgDescription} />
      <span>{textContent}</span>
    </div>
  );
};
