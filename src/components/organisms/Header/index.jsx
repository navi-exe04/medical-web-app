import { HeaderLogo } from "@molecules/HeaderLogo/";
import { HeaderMenu } from "@molecules/HeaderMenu/";
export const Header = () => {
  return (
    <header className="header" id="header-simple">
      <HeaderLogo />
      <nav className="header__nav">
        <HeaderMenu />
      </nav>
    </header>
  );
};
