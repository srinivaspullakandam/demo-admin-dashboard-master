import React from "react";
import { LinearProgress } from "@mui/material";
import Man2Icon from "@mui/icons-material/Man2";
import Woman2Icon from "@mui/icons-material/Woman2";

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./sittraffic.scss";

const SiteTraffic = () => {
  const weeksData = [
    { dayName: "Monday", new: 34, recurring: 76 },
    { dayName: "Tuesday", new: 58, recurring: 95 },
    { dayName: "Wednesday", new: 14, recurring: 49 },
    { dayName: "Thursday", new: 28, recurring: 75 },
    { dayName: "Friday", new: 45, recurring: 85 },
    { dayName: "Saturday", new: 20, recurring: 60 },
    { dayName: "Sunday", new: 28, recurring: 65 },
  ];

  const genderReviewsData = [
    { gender: "Male", value: 34 },
    { gender: "Female", value: 58 },
  ];

  const socialSitesData = [
    {
      name: "Organic Search",
      value: 56,
      icon: <GoogleIcon style={{ fontSize: "1.25rem" }} />,
    },
    {
      name: "Facebook",
      value: 15,
      icon: <FacebookIcon style={{ fontSize: "1.25rem" }} />,
    },
    {
      name: "Twitter",
      value: 11,
      icon: <TwitterIcon style={{ fontSize: "1.25rem" }} />,
    },
    {
      name: "LinkedIn",
      value: 8,
      icon: <LinkedInIcon style={{ fontSize: "1.25rem" }} />,
    },
  ];

  return (
    <div className="trafficSite">
      <div className="top">
        <p className="title">Traffic & Sales</p>
      </div>

      <div className="siteTrafficBottomWrapper">
        <div className="leftWrapper">
          {weeksData?.map((elem) => (
            <div className="leftSection" key={elem.dayName}>
              <div className="dayName">{elem.dayName}</div>

              <div className="clientValuesOnDay">
                <LinearProgress
                  variant="determinate"
                  value={elem.new}
                  sx={{
                    backgroundColor: "#d8dbe0",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#2982cc",
                    },
                    borderRadius: "6px",
                    marginBlockEnd: "3px",
                    height: "4px",
                  }}
                />
                <LinearProgress
                  variant="determinate"
                  value={elem.recurring}
                  sx={{
                    backgroundColor: "#d8dbe0",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "red",
                    },
                    borderRadius: "6px",
                    marginBlockEnd: "3px",
                    height: "4px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="rightWrapper">
          <div className="genderSectionReviews">
            {genderReviewsData?.map((elem) => (
              <React.Fragment key={elem?.gender}>
                <div className="topSection">
                  <div className="genderDetails">
                    {elem?.gender === "Male" ? <Man2Icon /> : <Woman2Icon />}
                    <span className="genderValue">{elem.gender}</span>
                  </div>
                  <div className="genderReviews">
                    <p>{elem.value + "%"}</p>
                  </div>
                </div>

                <div className="bottomSection">
                  <LinearProgress
                    variant="determinate"
                    value={elem.value}
                    sx={{
                      backgroundColor: "#d8dbe0",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "#f6960b",
                      },
                      borderRadius: "6px",
                      marginBlockEnd: "3px",
                      height: "4px",
                    }}
                  />
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="socialSectionReviews">
            {socialSitesData?.map((elem) => (
              <div key={elem?.name} className="mb1">
                <div className="topSection">
                  <div className="genderDetails">
                    {elem?.icon}
                    <span className="socialPlatformName">{elem.name}</span>
                  </div>
                  <div className="genderReviews">
                    <p>{elem.value + "%"}</p>
                  </div>
                </div>

                <div className="bottomSection">
                  <LinearProgress
                    variant="determinate"
                    value={elem.value}
                    sx={{
                      backgroundColor: "#d8dbe0",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "#1b9e3e",
                      },
                      borderRadius: "6px",
                      marginBlockEnd: "3px",
                      height: "4px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteTraffic;
