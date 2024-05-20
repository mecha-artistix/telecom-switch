import { useEffect, useReducer, useState } from "react";
import NavElement from "../components/NavElement";
import NavigationContext from "../contexts/NavigationContext";
import { navigation } from "../assets/StaticData";
import PanelHandler from "./PanelHandler";
import LogoutIcon from "../assets/icons/LogoutIcon";
function LeftPanel({ user, logout }) {
  const [isExpanded, setisExpanded] = useState(true);
  const [ulAlign, setulAlign] = useState({
    current: "",
    expanded: "items-baseline",
    collapsed: "items-center",
  });
  function handleExpand() {
    setisExpanded((isExpanded) => (isExpanded = !isExpanded));
  }
  useEffect(() => {
    isExpanded
      ? setulAlign({ ...ulAlign, current: ulAlign.expanded })
      : setulAlign({ ...ulAlign, current: ulAlign.collapsed });
  }, [isExpanded]);

  return (
    <NavigationContext.Provider value={{ isExpanded }}>
      <div
        className={
          `flex-shrink-0 grow-0 border-r border-r-k_light_gray` +
          (isExpanded ? `w-[300px]` : `w-[160px]`)
        }
      >
        <div
          // style={isExpanded ? { width: "300px" } : { width: "160px" }}
          className={`px-8 `}
        >
          <ul
            className={"flex flex-col justify-center py-4 " + ulAlign.current}
          >
            <li>
              <PanelHandler
                handleExpand={handleExpand}
                isExpanded={isExpanded}
              />
            </li>
            {navigation.map((navItem) => (
              <NavElement
                linkIcon={navItem.icon}
                linkText={navItem.name}
                linkto={navItem.link}
                nestedNav={navItem?.children}
                key={navItem.link}
              />
            ))}
            <li
              onClick={logout}
              className="my-2 flex list-none items-center space-x-4 text-base"
            >
              <LogoutIcon size={40} />
              {isExpanded && <p className="link-primary">{user?.username}</p>}
            </li>
          </ul>
        </div>
      </div>
    </NavigationContext.Provider>
  );
}

export default LeftPanel;
