import React from "react";
import { Smartphone } from "../assets/Icons";

const StreamingDevice = () => {
  return (
    <div
      className="streaming-device flex flex-col p-12 border-4 border-black-12 rounded-md"
      style={{
        background:
          "linear-gradient(229.83deg, rgba(229, 0, 0, 0.5) -224.857%, rgba(229, 0, 0, 0) 38.387%), rgb(15, 15, 15)",
      }}
    >
      <div className="device-name flex items-end gap-10">
        <Smartphone />
        <span className="text-white text-24px">SmartPhone</span>
      </div>
      <div className="about-device">
        <span className="text-gray-65 text-18px">
          StreamVibe is optimized for both Android and iOS smartphones. Download
          our app from the Google Play Store or the Apple App Store
        </span>
      </div>
    </div>
  );
};

export default StreamingDevice;
