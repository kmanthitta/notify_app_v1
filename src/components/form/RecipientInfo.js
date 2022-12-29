import React from "react";
import { Fragment } from "react";
import { Button, TextField, Typography, Select, MenuItem } from "@mui/material";
import RecipientList from "../RecipientList";

export const RecipientInfo = (props) => {
  return (
    <Fragment>
      <div className="flex flex-col mt-5">
        <Typography>Recipient's contact</Typography>
        <div className="flex">
          <Select displayEmpty className="h-10">
            <MenuItem>+91</MenuItem>
          </Select>
          <TextField
            id={props.errors.recipient ? "outlined-error-helper-text" : null}
            value={props.recipient}
            onChange={props.handleRecipientChange}
            size="small"
            error={
              props.errors.recipient.length > 0 ||
              props.errors.recipientList.length > 0
            }
            helperText={props.errors.recipient || props.errors.recipientList}
            FormHelperTextProps={{ style: { textAlign: "center" } }}
            inputProps={{ maxLength: "10" }}
          />
        </div>
      </div>
      <div className="flex mt-3 justify-center">
        <Button
          onClick={props.handleRecipientContactAdd}
          disabled={props.recipient.length === 0}
          color="secondary"
          variant="contained"
        >
          Add
        </Button>
      </div>
      <div className="flex flex-col mt-3 mb-8 w-1/8">
        <Typography>Recipients</Typography>
        <RecipientList
          recipients={props.recipientList}
          removeContact={props.removeContact}
        />
      </div>
    </Fragment>
  );
};
