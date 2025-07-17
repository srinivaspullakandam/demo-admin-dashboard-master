import React from "react";

import InputLabel from "@mui/material/InputLabel";

const styles = {
  inputTitleStyle: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "0.875rem",
    lineHeight: "1srem",
    color: "##A3A3A3",
    opacity: 0.9,
    marginBottom: "0.175rem",
  },
  asterisk: {
    "& .MuiFormLabel-asterisk ": {
      color: "#00AEEF",
    },
  },
};

const InputLabelTitle = (props) => {
  return (
    <InputLabel
      required={props.required}
      sx={{ ...styles.inputTitleStyle, ...styles.asterisk, ...props.styleData }}
    >
      {" "}
      {props.displayText}
    </InputLabel>
  );
};

export default InputLabelTitle;
