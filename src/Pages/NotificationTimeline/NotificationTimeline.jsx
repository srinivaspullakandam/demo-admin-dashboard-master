import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CancelIcon from "@mui/icons-material/Cancel";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";

import "./notification.scss";

const NotificationTimeline = () => {
  return (
    <div className="notifications">
      
      <div className="top">
        <p className="title">Notifications</p>
      </div>

      <Timeline position="right" className="timelineRoot">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="success">
              <ThumbUpAltIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, color: "#00AEEF" }}>
            <Typography variant="subtitle" component="span">
              You confirm Gupta Medical store visits
            </Typography>
            <Typography variant="body1">27 June - 05:34</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <InsertInvitationIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, color: "#00AEEF" }}>
            <Typography variant="subtitle" component="span">
              Reminder : Update Order Details Time!
            </Typography>
            <Typography variant="body1">25 July - 20:00</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="error">
              <CancelIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, color: "#00AEEF" }}>
            <Typography variant="subtitle" component="span">
              You Cancelled today orders deliveries
            </Typography>
            <Typography variant="body1">17 Nov - 12:23</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
              <InsertInvitationIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, color: "#00AEEF" }}>
            <Typography variant="subtitle" component="span">
              Reminder : Pay Workers Salary!
            </Typography>
            <Typography variant="body1">31 Jan - 12:23</Typography>
          </TimelineContent>
        </TimelineItem>


      </Timeline>
    </div>
  );
};

export default NotificationTimeline;
