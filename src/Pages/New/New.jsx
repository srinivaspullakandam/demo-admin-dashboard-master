import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid } from "@mui/material";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import InputField from "../../Components/InputField/InputField";
import { userCreateSchema } from "./userCreateSchema";

import "./new.scss";

const New = () => {
  const [file, setFile] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userCreateSchema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("Data", data);
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <p className="header">{"Add New User"}</p>
        </div>

        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>

          <div className="right">
            <div className="formInput">
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />

              <Grid container spacing={2} mt={1} mb={2}>
                <Grid item lg={12}>
                  <InputField
                    required={true}
                    readOnly={false}
                    displayText="First name"
                    id="first_name"
                    placeholder="First name"
                    register={register("first_name")}
                    error={errors.first_name}
                    errorDisplayText={errors.first_name?.message}
                  />
                </Grid>

                <Grid item lg={12}>
                  <InputField
                    required={true}
                    readOnly={false}
                    displayText="Last name"
                    id="last_name"
                    placeholder="Last name"
                    register={register("last_name")}
                    error={errors.last_name}
                    errorDisplayText={errors.last_name?.message}
                  />
                </Grid>

                <Grid item lg={12}>
                  <InputField
                    required={true}
                    readOnly={false}
                    displayText="Email ID"
                    id="email"
                    placeholder="Email ID"
                    register={register("email")}
                    error={errors.email}
                    errorDisplayText={errors.email?.message}
                  />
                </Grid>

                <Grid item lg={12}>
                  <InputField
                    required={true}
                    readOnly={false}
                    displayText="User name"
                    id="username"
                    placeholder="User name"
                    register={register("username")}
                    error={errors.username}
                    errorDisplayText={errors.username?.message}
                  />
                </Grid>

                <Grid item lg={12}>
                  <InputField
                    required={true}
                    readOnly={false}
                    displayText="Phone number"
                    id="phone"
                    placeholder="Phone number"
                    register={register("phone")}
                    error={errors.phone}
                    errorDisplayText={errors.phone?.message}
                  />
                </Grid>
              </Grid>
            </div>

            <button onClick={handleSubmit(onSubmit)}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
