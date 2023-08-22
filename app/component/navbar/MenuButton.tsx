'use client'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MenuButtonProps {
  onBtnClick: any;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onBtnClick }) => {
  return (
    <FontAwesomeIcon
      onClick={onBtnClick}
      icon={faBars}
      style={{
        color: "#E6F4F1",
        width: "30px",
        height: "30px",
        marginRight: "20px",
      }}
    />
  );
};

export default MenuButton;
