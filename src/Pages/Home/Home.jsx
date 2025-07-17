import React from "react";
import Chart from "../../Components/Chart/Chart";
import Featured from "../../Components/Featured/Featured";
import Widget from "../../Components/Widget/Widget";
import Navbar from "../Navbar/Navbar";
import NotificationTimeline from "../NotificationTimeline/NotificationTimeline";
import Sidebar from "../Sidebar/Sidebar";
import SiteTraffic from "../SiteTraffic/SiteTraffic";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />

      <div className="homeContainer">
        <Navbar />

        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>

        <div className="charts">
          <Featured />
          <Chart title="Last 9 months revenue" aspect={2 / 1} />
        </div>

        <div className="notificationTimeline">
          <NotificationTimeline />
        </div>

        <div className="trafficOnSite">
          <SiteTraffic />
        </div>
      </div>
    </div>
  );
};

export default Home;
