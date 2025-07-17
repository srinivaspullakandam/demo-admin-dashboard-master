import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { Legend, RadialBar, Tooltip, RadialBarChart } from "recharts";

import "./featured.scss";

const Featured = () => {
  const latestOrderToday = [
    {
      name: "Aspirin",
      difference: "8%",
      isProfit: true,
      isDivider: false,
      assetValue: "$120.00",
    },
    {
      name: "Enalapril",
      difference: "2%",
      isProfit: true,
      isDivider: true,
      assetValue: "$90.00",
    },
    {
      name: "Mesna",
      difference: "25%",
      isProfit: true,
      isDivider: true,
      assetValue: "$105.21",
    },
    {
      name: "Cymbalta",
      difference: "12%",
      isProfit: false,
      isDivider: true,
      assetValue: "$50.65",
    },
    {
      name: "Rantidine",
      difference: "2%",
      isProfit: true,
      isDivider: true,
      assetValue: "$15.10",
    },
  ];

  return (
    <div className="featured">
      <div className="top">
        <p className="title">Popular Stocks Today</p>
      </div>

      <div className="bottom">
        <div className="summary">
          {latestOrderToday?.map((elem) => (
            <React.Fragment key={elem?.name}>
              {elem.isDivider && <hr />}
              <div className="item">
                <div className="left">
                  <div className="itemTitle">{elem.name}</div>
                  <div className="itemResult">
                    <span
                      className={
                        elem?.isProfit
                          ? "itemResult positive"
                          : "itemResult negative"
                      }
                    >
                      {elem.difference}
                    </span>
                    <span
                      className={
                        elem?.isProfit
                          ? "itemResult positive"
                          : "itemResult negative"
                      }
                    >
                      {elem.isProfit ? "Profit" : "Loss"}
                    </span>
                  </div>
                </div>

                <div className="right">
                  <div>{elem.assetValue}</div>
                  <div>
                    {elem?.isProfit ? (
                      <KeyboardArrowUpIcon
                        fontSize="small"
                        style={{
                          backgroundColor: "rgba(0, 128, 0, 0.2)",
                          color: "green",
                          borderRadius: "50%",
                          padding: "2px",
                        }}
                      />
                    ) : (
                      <KeyboardArrowDownIcon
                        fontSize="small"
                        style={{
                          color: "crimson",
                          backgroundColor: "rgba(255, 0, 0, 0.2)",
                          borderRadius: "50%",
                          padding: "2px",
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
