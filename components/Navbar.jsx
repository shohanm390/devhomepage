"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [time, setTime] = useState(new Date());

  // Function to format time with leading zeros and AM/PM
  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    hours = hours < 10 ? "0" + hours : hours; // pad single-digit hours with a leading zero
    minutes = minutes < 10 ? "0" + minutes : minutes; // pad single-digit minutes with a leading zero
    return `${hours}:${minutes} ${period}`;
  };

  // Function to get greeting message based on time
  const greetingMessage = () => {
    let hours = time.getHours();
    let msg;

    switch (true) {
      case hours >= 0 && hours <= 3:
        msg = "It is midnight Now";
        break;
      case hours > 3 && hours <= 6:
        msg = "It is Early Morning Now";
        break;
      case hours > 6 && hours <= 12:
        msg = "Good Morning";
        break;
      case hours > 12 && hours <= 15:
        msg = "Time To Eat & Sleep";
        break;
      case hours > 15 && hours <= 18:
        msg = "Good Afternoon";
        break;
      case hours > 18 && hours <= 20:
        msg = "Good Evening";
        break;
      case hours > 20 && hours <= 24:
        msg = "Let's Enjoy The Night";
        break;
      default:
        break;
    }

    return "Hey Abdullah, " + msg;
  };

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`flex justify-between px-5 border-b-4 border-black pb-2 pt-3 flex-wrap bg-gray-900 text-white
      }`}
    >
      <div>
        <h1 className="text-lg font-serif">
          {/* author name */}
          <span>{greetingMessage()}</span>
        </h1>
        <p className="py-2">coding gives you wings...</p>
      </div>
      <div className="flex flex-col items-center">
        {/* time */}
        <h1 className="my-1 font-semibold"> <span className="font-bold">Time : </span> {formatTime(time)}</h1>
        {/* Date */}
        <h2 className="my-1 font-semibold"><span className="font-bold">Date :</span> {`${time.getDate()}/${
          time.getMonth() + 1
        }/${time.getFullYear()}`}</h2>
      </div>
    </div>
  );
};

export default Navbar;
