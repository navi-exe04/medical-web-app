export const HeaderMenuBtn = ({ additionalClass = "" }) => {
  return (
    <label for="check" className={"menu-btn " + additionalClass}>
      <input type="checkbox" id="check" />
      <span className="menu-btn__line"></span>
      <span className="menu-btn__line"></span>
      <span className="menu-btn__line"></span>
    </label>
  );
};
