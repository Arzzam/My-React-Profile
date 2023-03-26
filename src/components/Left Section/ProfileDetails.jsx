import React from "react";
import ProfileImage from "../../assets/profile.png";

const ProfileDetails = () => {
  return (
    <div className="relative top-0 bottom-0 left-0 right-0 flex-none mx-auto my-0 info w-90 ">
      <div className="">
      <div className="flex flex-wrap justify-center h-40">
        <img src={ProfileImage} alt="" className="rounded-full h-4/5" />
      </div>
      <div className="font-medium name text-zinc-100">
        Hey, I'm Nafil Arzzam
      </div>
      <div className="text-zinc-200 subtext">
        A person interested in designing and developing. <br /> Self Learner <br />
        Living in Tirunelveli, India. 
        <br /> Looking for oppertunities.
      </div>
      <div className="mt-8 social-links text-zinc-300">
        <a href="https://www.linkedin.com/in/arzzam19/">
          <i className="m-3 text-2xl icon fa fa-linkedin text-zinc-300 hover:text-slate-500"></i>
        </a>
        <a href="https://github.com/arzzam">
          <i className="m-3 text-2xl icon fa fa-github text-zinc-300 hover:text-slate-500"></i>
        </a>
        <a href="https://www.instagram.com/arzzam_19/">
          <i className="m-3 text-2xl icon fa fa-instagram text-zinc-300 hover:text-slate-500"></i>
        </a>
        <a href="https://twitter.com/arzzam19">
          <i className="m-3 text-2xl icon fa fa-twitter text-zinc-300 hover:text-slate-500"></i>
        </a>
      </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
