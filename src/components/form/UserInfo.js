import React from "react";
import { Fragment } from "react";
import { TextField, Typography, Select, MenuItem } from "@mui/material";

export const UserInfo = (props) => {
  return (
    <Fragment>
      <div className="flex flex-col">
        <Typography>Name</Typography>
        <TextField
          value={props.userName}
          onChange={props.handleNameChange}
          size="small"
          error={props.errors.userName.length > 0}
          helperText={props.errors.userName}
          FormHelperTextProps={{ style: { textAlign: "center" } }}
        />
      </div>
      <div className="flex flex-col mt-5">
        <Typography>Contact</Typography>
        <div className="flex">
          <Select displayEmpty className="h-10">
            <MenuItem>+91</MenuItem>
          </Select>
          <TextField
            value={props.userContact}
            onChange={props.handleContactChange}
            size="small"
            error={props.errors.userContact.length > 0}
            helperText={props.errors.userContact}
            FormHelperTextProps={{ style: { textAlign: "center" } }}
            inputProps={{ maxLength: "10" }}
          />
        </div>
      </div>
    </Fragment>
  );
};
