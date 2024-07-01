import React from "react";
import {
  HamburgerIconSvg,
  NotificationIconSvg,
} from "../../../../../assets/svg/Svg";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center p-2">
      <div
        className="flex"
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <div className="cursor-pointer"
        // onClick={() => {
        //   navigation.dispatch(DrawerActions.toggleDrawer());
        // }}
        >
          <HamburgerIconSvg />
        </div>
        {title && <p className="text-gray-700 font-bold ml-2">{`${title}`}</p>}
      </div>
      <div style={{ flexDirection: "row" }}>
        <div
          className="p-0.5 rounded-full border-[0.5px] border-black"
          onClick={() => {
            navigate("NotificationScreen");
          }}
        >
          <NotificationIconSvg />
        </div>
      </div>
    </div>
  );
};

export default Header;
