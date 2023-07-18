import React, { useState } from "react";
import MenuList from "../../components/Menu";
import menuActiveIcon from "../../assets/menu-active-icon.svg";
import bottomMenu from "../../assets/Bottom-menu.svg";
import arrowUp from "../../assets/menu/ArrowUp.svg";
import arrowDown from "../../assets/menu/ArrowDown.svg";
import useStyles from "./styles";

const MenuBar = (props) => {
  const { backGroundClear } = props;
  const {
    menuBackDropOpen,
    menuBackDropClose,
    bottomMenuSection,
    bottomMenuImg,
    arrowUpImg,
    arrowDownImg,
    positionRelative,
  } = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(menuOpen ? false : true);
    backGroundClear(!menuOpen);
  };

  const selectedSamePage = (val) => {
    setMenuOpen(!val);
  };

  return (
    <>
      <div className={menuOpen ? menuBackDropOpen : menuBackDropClose}>
        {<MenuList selectedSamePage={selectedSamePage} />}
      </div>
      <div className={bottomMenuSection} onClick={handleMenu}>
        <div className={positionRelative}>
          <img src={bottomMenu} className={bottomMenuImg} />
          {!menuOpen ? (
            <img src={arrowUp} className={arrowUpImg} />
          ) : (
            <img src={arrowDown} className={arrowDownImg} />
          )}
        </div>
      </div>
    </>
  );
};

export default MenuBar;
