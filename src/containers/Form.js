import { useState } from "react";
import React from "react";
import { Button } from "@mui/material";
import { UserInfo } from "../components/form/UserInfo";
import { RecipientInfo } from "../components/form/RecipientInfo";
import { Message } from "../components/form/Message";
import { Schedule } from "../components/form/Schedule";
import axios from "axios";
import { prepareDate, formValidate } from "../utils";

const Form = () => {
  const [step, setStep] = useState(1);
  const [userName, setUserName] = useState("");
  const [userContact, setUserContact] = useState("");
  const [recipient, setRecipient] = useState("");
  const [recipientList, setRecipientList] = useState([]);
  const [message, setMessage] = useState("");
  const [schedule, setSchedule] = useState({
    day: "1",
    month: "Jan",
    year: "2023",
    hour: "12",
    minute: "00",
    time: "am",
  });
  const [errors, setErrors] = useState({
    userName: "",
    userContact: "",
    recipient: "",
    recipientList: "",
    message: "",
  });

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleContactChange = (event) => {
    setUserContact(event.target.value);
  };

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  };

  const handleRecipientContactAdd = () => {
    let stateObj = {
      setError,
      recipient,
      recipientList,
      setRecipientList,
      setRecipient,
    };
    formValidate(stateObj);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleScheduleChange = (key, value) => {
    setSchedule((prevValue) => ({ ...prevValue, [key]: value }));
  };

  const removeContact = (value) => {
    setRecipientList(recipientList.filter((con) => con !== value));
  };

  const handleNextClicked = () => {
    if (validateForm(step)) {
      setStep(step + 1);
    }
  };

  const handleBackClicked = () => {
    setStep(step - 1);
  };

  const handleSubmitClicked = () => {
    let scheduled_date = prepareDate(schedule);

    let data = {
      sender_name: userName,
      sender_contact: "+91".concat(userContact),
      recipients: recipientList,
      message: message,
      schedule: scheduled_date,
    };

    axios.post("http://localhost:8080/test", data);
  };

  const setError = (key, value) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [key]: value,
    }));
  };

  const validateForm = () => {
    let obj = { userContact, userName, step, setError, recipientList, message };
    return formValidate(obj);
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <div className="pt-12 pl-12 pr-12 pb-6 rounded-2xl bg-white shadow-2xl shadow-slate-500 border-slate-700 border-2">
        {step === 1 && (
          <UserInfo
            userName={userName}
            handleNameChange={handleNameChange}
            userContact={userContact}
            handleContactChange={handleContactChange}
            errors={errors}
          />
        )}
        {step === 2 && (
          <RecipientInfo
            recipient={recipient}
            handleRecipientChange={handleRecipientChange}
            errors={errors}
            handleRecipientContactAdd={handleRecipientContactAdd}
            recipientList={recipientList}
            removeContact={removeContact}
          />
        )}
        {step === 3 && (
          <Message
            handleMessageChange={handleMessageChange}
            message={message}
            errors={errors}
          />
        )}
        {step === 4 && (
          <Schedule
            schedule={schedule}
            handleScheduleChange={handleScheduleChange}
          />
        )}
        <div className={step === 1 ? null : "flex justify-between"}>
          {step > 1 && step < 5 && (
            <div className="flex justify-start mt-5">
              <Button
                variant="contained"
                size="small"
                onClick={handleBackClicked}
              >
                Back
              </Button>
            </div>
          )}
          {step < 4 && (
            <div className="flex justify-end mt-5">
              <Button
                variant="contained"
                size="small"
                onClick={handleNextClicked}
              >
                Next
              </Button>
            </div>
          )}
          {step === 4 && (
            <div className="flex justify-end mt-5">
              <Button
                variant="contained"
                size="small"
                onClick={handleSubmitClicked}
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
