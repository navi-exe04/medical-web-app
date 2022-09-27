export const GeneralBtn = ({
  type = "",
  additionalClass = "",
  newEvent,
  textContent = "",
  idBtn = "",
}) => {
  return (
    <button
      type={type}
      onClick={newEvent}
      className={"btn " + additionalClass}
      id={idBtn}
    >
      {textContent}
    </button>
  );
};
