import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";

const Chip = (props) => {
  return (
    <div className="flex m-1">
      <div className="rounded-lg bg-zinc-900 text-white p-1 flex flex-row items-center">
        <Typography>{props.value}</Typography>{" "}
        {props.value !== "No recipients added!" && (
          <CloseIcon
            style={{ height: "2.5vh", cursor: "pointer" }}
            onClick={() => props.confirmRemove(props.value)}
          />
        )}
      </div>
    </div>
  );
};

export default Chip;
