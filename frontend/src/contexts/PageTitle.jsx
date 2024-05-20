import { useLocation } from "react-router-dom";

const PageTitle = () => {
  const location = useLocation();

  // Extract the page name from the current route
  const getPageName = () => {
    let name = "";
    const path = location.pathname;
    if (path === "/") return (name = "Dashboard");

    const lastSlashIndex = path.lastIndexOf("/");
    name = path
      .substring(lastSlashIndex + 1)
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join()
      .replace(",", " ");

    return name;
  };

  return <div className="">{getPageName()}</div>;
};

export default PageTitle;
