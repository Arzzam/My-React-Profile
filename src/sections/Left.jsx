import React from "react";
import { Profile } from "../components/Left Section/Profile";
import ProfileDetails from "../components/Left Section/ProfileDetails";

const Left = () => {
  return (
    <div
      id="Left"
      className="fixed inline-block float-left w-1/2 h-full overflow-hidden text-center align-top md:static md:block md:w-full md:h-screen"
    >
      <Profile />
      <div className="flex items-center justify-center h-full left-inner p-50px min-h-own sm:p-10">
        <ProfileDetails />
      </div>
    </div>
  );
};
export default Left;
