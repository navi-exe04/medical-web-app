import { HeaderLogo } from "@molecules/HeaderLogo/";
import { HeaderMenu } from "@molecules/HeaderMenu/";
export const Header = () => {
  return (
    <header className="header" id="header-simple">
      <nav className="header-nav">
        <HeaderLogo />
        <HeaderMenu />
      </nav>
    </header>
  );
};
