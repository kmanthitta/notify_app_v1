export const getMonth = (monthNumber) => {
  return new Date(Date.parse(monthNumber + " 1, 2012")).getMonth() + 1;
};

export const prepareDate = (date) => {
  return `${date.year}-${getMonth(date.month)}-${date.day}  ${convertTime(
    date
  )}`;
};

export const convertTime = (scheduleTime) => {
  let { hour, minute, time } = scheduleTime;
  if (time === "am" && hour === 12) {
    hour = "00";
  }
  if (time === "pm" && hour !== 12) {
    hour = parseInt(hour) + 12;
  }

  return `${hour}:${minute}`;
};

export const formValidate = (props) => {
  let {
    userContact,
    userName,
    step,
    setError,
    recipientList,
    message,
    recipient,
    setRecipientList,
    setRecipient,
  } = props;
  let validated = true;
  let regex = new RegExp(/\D+/);
  switch (step) {
    case 1:
      if (userName.length === 0) {
        setError("userName", "Name cannot be empty");
        validated = false;
      } else {
        setError("userName", "");
      }
      if (userContact.length === 0) {
        setError("userContact", "Contact cannot be empty");
        validated = false;
      } else if (userContact.length < 10) {
        setError("userContact", "Minimum 10 digits required");
        validated = false;
      } else if (regex.test(userContact)) {
        setError("userContact", "Only numbers allowed");
        validated = false;
      } else {
        setError("userContact", "");
      }
      return validated;
    case 2:
      if (recipientList.length === 0) {
        setError("recipientList", "Atleast one recipient required");
        validated = false;
      } else {
        setError("recipientList", "");
      }
      return validated;
    case 3:
      if (message.length === 0) {
        setError("message", "Message cannot be empty");
        validated = false;
      } else {
        setError("message", "");
      }
      return validated;
    default:
      setError("recipientList", "");
      if (recipient.length < 10) {
        setError("recipient", "Minimum 10 digits required");
        return;
      }
      if (regex.test(recipient)) {
        setError("recipient", "Only numbers allowed");
        return;
      }
      let repeatedValue = recipientList.filter(
        (con) => con === "+91".concat(recipient)
      );
      if (repeatedValue.length !== 0) {
        setError("recipient", "Already exists in list");
      } else {
        setError("recipient", "");
        setRecipientList([...recipientList, "+91".concat(recipient)]);
        setRecipient("");
      }
      return validated;
  }
};
