import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import GetAppIcon from "@material-ui/icons/GetApp";

const More = () => {
  return (
    <div className="more">
      <div className="more__in">
        <NotificationsIcon />
        <p>Notification Preferences</p>
      </div>
      <hr />
      <div className="more__in">
        <MonetizationOnIcon />
        <p>Sell on Flipkart</p>
      </div>
      <hr />
      <div className="more__in">
        <LiveHelpIcon />
        <p>24*7 Customer Care</p>
      </div>
      <hr />
      <div className="more__in">
        <TrendingUpIcon />
        <p>Advertise</p>
      </div>
      <hr />
      <div className="more__in">
        <GetAppIcon />
        <p>Download app</p>
      </div>
    </div>
  );
};

export default MoreT;
