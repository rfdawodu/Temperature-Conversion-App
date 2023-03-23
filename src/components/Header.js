import React from "react";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullOutlinedIcon from "@mui/icons-material/BatteryFullOutlined";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

function Header() {
  return (
    <div className="header">
      <span className="time">9:41</span>
      <span class="material-icons">
        <SignalCellularAltIcon />
      </span>
      <span class="material-icons-outlined">
        <WifiIcon />
      </span>

      <BatteryFullOutlinedIcon />
    </div>
  );
}

export default Header;
