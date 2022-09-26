import { Header } from "@organisms/Header";
export const TemplatePage = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main-content">{children}</main>
    </>
  );
};
