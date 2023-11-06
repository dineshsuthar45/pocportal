/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from "react-pro-sidebar";
import { Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./style.scss";
import {
  AlphaIcon,
  CustomRiskIcon,
  MenuTreeIcon,
  PerformanceIcon,
  ReturnsIcon,
  SectorRiskIcon,
  SeparateIcon,
  SidebarFullLogo,
  SidebarSmallLogo,
  TotalRisk,
  TradingIcon,
} from "../../assets/sidebar_assets/icons";
// import { imgStyle } from "../topBar/style";

const SideBar = () => {
  const { collapseSidebar } = useProSidebar();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [ripple, setRipple] = useState<JSX.Element>(<></>);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(-1);
  const [displayedIcon, setDisplayedIcon] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSelected(!isSelected);
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const xPos = e.clientX - rect.left - size / 2;
    const yPos = e.clientY - rect.top - size / 2;

    const newRipple: JSX.Element = (
      <span
        className="rippleEffect"
        style={{
          top: yPos + "px",
          left: xPos + "px",
          width: size + "px",
          height: size + "px",
        }}
        onAnimationEnd={() => setRipple(<></>)}
      ></span>
    );

    setRipple(newRipple);
  };

  interface ISidebarData {
    id: number;
    item: string;
    link: string;
    title: string;
    icon?: JSX.Element | null;
    children?: ISidebarData[];
  }

  const sidebarData: ISidebarData[] = [
    {
      id: 1,
      item: "Total Risk",
      link: "/",
      title: "Total Risk",
      icon: (
        <>
          <TotalRisk />
        </>
      ),
      children: [
        {
          id: 1.1,
          item: "CI0 Risk Report",
          link: "/",
          title: "CI0 Risk Report",
          icon: <></>,
        },
      ],
    },
    {
      id: 2,
      item: "Sector Risk",
      link: "/",
      title: "Sector Risk",
      icon: (
        <>
          {/* <img src="/src/assets/Returns 1.svg" alt="" /> */}
          <SectorRiskIcon />
        </>
      ),
      children: [
        {
          id: 2.1,
          item: "Financials Risk",
          link: "/",
          title: "Financials Risk",
          icon: <></>,
        },
        {
          id: 2.2,
          item: "Business Services Risk",
          link: "/",
          title: "Business Services Risk",
          icon: <></>,
        },
        {
          id: 2.3,
          item: "TMT Risk",
          link: "/",
          title: "TMT Risk",
          icon: <></>,
        },
        {
          id: 2.4,
          item: "Consumer Risk",
          link: "/",
          title: "Consumer Risk",
          icon: <></>,
        },
      ],
    },
    {
      id: 3,
      item: "Custom Risk",
      link: "/",
      title: "Custom Risk",
      icon: (
        <>
          {/* <img src="/src/assets/Custom Risk 2.svg" alt="" /> */}
          <CustomRiskIcon />
        </>
      ),
      children: [
        {
          id: 3.1,
          item: "Concentrated Detail",
          link: "/",
          title: "Concentrated Detail",
          icon: <></>,
        },
        {
          id: 3.2,
          item: "Sector Risk",
          link: "/",
          title: "Sector Risk",
          icon: <></>,
        },
        {
          id: 3.3,
          item: "Write - Up",
          link: "/",
          title: "Write - Up",
          icon: <></>,
        },
        {
          id: 3.4,
          item: "Scenario",
          link: "/",
          title: "Scenario",
          icon: <></>,
        },
      ],
    },
    {
      id: 4,
      item: "Returns",
      link: "/",
      title: "Returns",
      icon: (
        <>
          {/* <img src="/src/assets/Sector Risk 2.svg" alt="" /> */}
          <ReturnsIcon />
        </>
      ),
      children: [
        {
          id: 4.1,
          item: "Financials Returns",
          link: "/",
          title: "Financials Returns",
          icon: <></>,
        },
        {
          id: 4.2,
          item: "Business Services Returns",
          link: "/",
          title: "Business Services Returns",
          icon: <></>,
        },
        {
          id: 4.3,
          item: "TMT Returns",
          link: "/",
          title: "TMT Returns",
          icon: <></>,
        },
        {
          id: 4.4,
          item: "Consumer Returns",
          link: "/",
          title: "Consumer Returns",
          icon: <></>,
        },
      ],
    },
    {
      id: 5,
      item: "Alpha",
      link: "/",
      title: "Alpha",
      icon: (
        <>
          {/* <img src="/src/assets/Alpha 1.svg" alt="" /> */}
          <AlphaIcon />
        </>
      ),
      children: [
        {
          id: 5.1,
          item: "Global",
          link: "/",
          title: "Global",
          icon: <></>,
        },
        {
          id: 5.2,
          item: "Portfolio",
          link: "/",
          title: "Portfolio",
          icon: <></>,
        },
        {
          id: 5.3,
          item: "PM Monitor",
          link: "/",
          title: "PM Monitor",
          icon: <></>,
        },
        {
          id: 5.4,
          item: "Factor Returns",
          link: "/",
          title: "Factor Returns",
          icon: <></>,
        },
        {
          id: 5.5,
          item: "Factor Exposure",
          link: "/",
          title: "Factor Exposure",
          icon: <></>,
        },
      ],
    },
    {
      id: 6,
      item: "Performance",
      link: "/",
      title: "Performance",
      icon: (
        <>
          {/* <img src="/src/assets/Performance 1.svg" alt="" /> */}
          <PerformanceIcon />
        </>
      ),
      children: [
        {
          id: 6.1,
          item: "Intraday Spread",
          link: "/",
          title: "Intraday Spread",
          icon: <></>,
        },
      ],
    },
    {
      id: 7,
      item: "Trading",
      link: "/",
      title: "Trading",
      icon: (
        <>
          {/* <img src="/src/assets/Trading 1.svg" alt="" /> */}
          <TradingIcon />
        </>
      ),
      children: [
        {
          id: 7.1,
          item: "Pre-Market Movers",
          link: "/",
          title: "Pre-Market Movers",
          icon: <></>,
        },
        {
          id: 7.2,
          item: "Basket Exposure - Pre",
          link: "/",
          title: "Basket Exposure - Pre",
          icon: <></>,
        },
        {
          id: 7.3,
          item: "Basket Exposure - Post",
          link: "/",
          title: "Basket Exposure - Post",
          icon: <></>,
        },
        {
          id: 7.4,
          item: "Basket Decomp",
          link: "/",
          title: "Basket Decomp",
          icon: <></>,
        },
      ],
    },
  ];

  const handleClickActive = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setSelected(id);
    setDisplayedIcon(!displayedIcon);

    handleClick(e);
  };

  const checkId = (selectedId: number, rootItem: ISidebarData) => {
    let retVal = false;
    for (const item of sidebarData) {
      if (retVal) break;
      if (item === rootItem && item.children && item.children.length > 0) {
        const childrenIds = item.children.map((child: ISidebarData) => {
          return child.id;
        });
        if (childrenIds.includes(selectedId)) {
          retVal = true;
        }
      }
    }
    return retVal;
  };

  const displayedMenu = sidebarData.map((item: ISidebarData) => {
    return (
      <>
        {item.children ? (
          <SubMenu
            suffix={
              displayedIcon && selected === item.id ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )
            }
            className={checkId(selected, item) ? "subMenuActive" : "subMenu"}
            label={item.item}
            onClick={(e) => handleClickActive(e, item.id)}
            icon={item.icon}
          >
            {item.children.map((child: ISidebarData) => {
              return (
                <>
                  <MenuItem
                    key={child.id}
                    title={child.title}
                    prefix={<MenuTreeIcon />}
                    onClick={(e) => handleClickActive(e, child.id)}
                    className={
                      selected === child.id ? "menuItemActive" : "menuItem"
                    }
                  >
                    {child.item}
                    {selected === child.id && ripple}
                  </MenuItem>
                </>
              );
            })}
          </SubMenu>
        ) : (
          <MenuItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            onClick={(e) => handleClickActive(e, item.id)}
            className={selected === item.id ? "menu_item" : "menu_item_active"}
          >
            {item.item}
            {selected === item.id && ripple}
          </MenuItem>
        )}
      </>
    );
  });

  return (
    <>
      {/* Collapsed Toggle Button */}
      <div
        className="toggleBtnCollapsed"
        style={{ visibility: !isClicked ? "hidden" : "visible" }}
        onClick={() => {
          collapseSidebar();
          setIsClicked(!isClicked);
        }}
      >
        <SeparateIcon />
      </div>

      <div id="sidebar" style={{ height: "100vh", display: "flex" }}>
        <Sidebar className={isClicked ? "sidebarCollaps" : "sidebarContainer"}>
          <Box className="header">
            <Box className="logoImg">
              {isClicked ? <SidebarSmallLogo /> : <SidebarFullLogo />}
            </Box>
            <div
              className="toggleBtn"
              onClick={() => {
                collapseSidebar();
                setIsClicked(!isClicked);
              }}
              style={{ visibility: !isClicked ? "visible" : "hidden" }}
            >
              <SeparateIcon />
            </div>
          </Box>
          <div className="titleMenu">OVERVIEW</div>
          <Menu>{displayedMenu}</Menu>
        </Sidebar>
      </div>
    </>
  );
};
export default SideBar;
