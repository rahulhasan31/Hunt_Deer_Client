import React from "react";
import AllJobs from "./AllJobs/AllJobs";
import SingleJob from "./SingleJob/SingleJob";

const Jobs = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-5">
        <div className="">
          <AllJobs></AllJobs>
        </div>
        <div className="">
          <SingleJob></SingleJob>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
