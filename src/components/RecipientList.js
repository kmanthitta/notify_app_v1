import React, { useState } from "react";
import Chip from "./Chip";
import { Popup } from "./Popup";

const RecipientList = (props) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [toRemove, setToRemove] = useState("");

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleOpenPopup = (value) => {
    setPopupOpen(true);
    setToRemove(value);
  };

  return (
    <>
      <Popup
        open={popupOpen}
        handleYesClicked={() => {
          props.removeContact(toRemove);
          handleClosePopup();
        }}
        handleNoClicked={handleClosePopup}
        value={toRemove}
      />
      <div className="flex flex-row items-center flex-wrap justify-center max-w-sm">
        {props.recipients.length === 0 && (
          <Chip key="default" value="No recipients added!" />
        )}
        {props.recipients.map((rec) => (
          <Chip key={rec} value={rec} confirmRemove={handleOpenPopup} />
        ))}
      </div>
    </>
  );
};

export default RecipientList;
