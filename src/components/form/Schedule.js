import React from "react";
import { Select, MenuItem } from "@mui/material";

const days = [];
for (let i = 1; i <= 31; i++) {
  days.push(i);
}

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const years = [];
for (let i = 2022; i <= 2099; i++) {
  years.push(i);
}

const hours = [];
for (let i = 1; i <= 12; i++) {
  hours.push(i);
}

const minutes = [];
for (let i = 0; i < 60; i++) {
  minutes.push(i < 10 ? `0${i}` : i);
}

export const Schedule = (props) => {
  return (
    <div className="flex flex-col">
      <p className="font-serif">Schedule on</p>
      <div className="flex items-center justify-center">
        <div className="flex m-4">
          <Select
            value={props.schedule.day}
            size="small"
            autoWidth
            onChange={(event) =>
              props.handleScheduleChange("day", event.target.value)
            }
          >
            {days.map((day) => (
              <MenuItem value={day}>{day}</MenuItem>
            ))}
          </Select>
        </div>
        <div className="flex m-4">
          <Select
            value={props.schedule.month}
            size="small"
            autoWidth
            onChange={(event) =>
              props.handleScheduleChange("month", event.target.value)
            }
          >
            {months.map((month) => (
              <MenuItem value={month}>{month}</MenuItem>
            ))}
          </Select>
        </div>
        <div className="flex m-4">
          <Select
            value={props.schedule.year}
            size="small"
            autoWidth
            onChange={(event) =>
              props.handleScheduleChange("year", event.target.value)
            }
          >
            {years.map((year) => (
              <MenuItem value={year}>{year}</MenuItem>
            ))}
          </Select>
        </div>
      </div>
      <p className="font-serif">at</p>
      <div className="flex items-center justify-center">
        <div className="flex m-4">
          <Select
            value={props.schedule.hour}
            size="small"
            autoWidth
            onChange={(event) =>
              props.handleScheduleChange("hour", event.target.value)
            }
          >
            {hours.map((hour) => (
              <MenuItem value={hour}>{hour}</MenuItem>
            ))}
          </Select>
        </div>
        <div className="font-bold">:</div>
        <div className="flex m-4">
          <Select
            value={props.schedule.minute}
            size="small"
            autoWidth
            onChange={(event) =>
              props.handleScheduleChange("minute", event.target.value)
            }
          >
            {minutes.map((minute) => (
              <MenuItem value={minute}>{minute}</MenuItem>
            ))}
          </Select>
        </div>
        <div className="flex m-4">
          <Select
            value={props.schedule.time}
            size="small"
            autoWidth
            onChange={(event) =>
              props.handleScheduleChange("time", event.target.value)
            }
          >
            <MenuItem value="am">am</MenuItem>
            <MenuItem value="pm">pm</MenuItem>
          </Select>
        </div>
      </div>
    </div>
  );
};
