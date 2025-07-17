import React from "react";

import { InputBase, Typography } from "@mui/material";
import InputLabelTitle from "../InputLabelTitle/InputLabelTitle";

const style = {
  typographyStyle: {
    color: "red",
    fontSize:"0.775rem",
  },

  errorStyle: {
    border: "0.125rem solid red",

    "&:hover": {
      border: "0.125rem solid red",
    },
  },

  inputFieldStyle: {
    width: "100%",
    height: "2.75rem",
    padding: "1rem",
    marginTop: "0.2rem",
    marginBottom: "0.275rem",
    border: "0.063rem solid #F2F2F2",
    boxSizing: "border-box",
    boxShadow: "0rem 0.25rem 0.5rem rgba(0,0,0,0.04)",
    borderRadius: "0.5rem",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "&:hover": {
      border: "0.125rem solid #00AEEF",
    },
  },
};

const InputField = ({
  required,
  readOnly,
  displayText,
  id,
  placeholder,
  register,
  error,
  errorDisplayText,
  fullWidth = true,
}) => {
  return (
    <>
      <InputLabelTitle required={required} displayText={displayText} />
      <InputBase
        id={id}
        placeholder={placeholder}
        required
        fullWidth={fullWidth}
        readOnly={readOnly}
        sx={{
          ...style.inputFieldStyle,
          ...(error && style.errorStyle),
        }}
        {...register}
        error={error ? true : false}
      />
      <Typography sx={style.typographyStyle}>{errorDisplayText}</Typography>
    </>
  );
};

export default InputField;
