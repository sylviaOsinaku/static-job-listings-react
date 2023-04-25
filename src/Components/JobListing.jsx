import React from "react";
import classes from "./JobListings.module.css";
const JobListing = function (props) {
  const jobData = props.JobListings;

  const jobLangAndTools = [
    jobData.role,
    jobData.level,
    ...jobData.languages,
    ...jobData.tools,
  ];
  jobData.allJobListings = jobLangAndTools;

  const buttonHandler = function (e) {
    const data = e.target.getAttribute("data-tools");
    if (props.listOfFilteredJobs?.includes(data)) {
      return;
    }
    props.onFilter(data);
    console.log(data);
  };

  return (
    <div className={classes["job_listing-wrapper"]}>
      <div className={classes["details-content-wrapper"]}>
        <img src={jobData.logo} alt="" />
        <div>
          <div className={classes["company-details"]}>
            <h2>{jobData.company}</h2>
            {jobData.new && <span className={classes["new"]}>New</span>}
            {jobData.featured && (
              <span className={classes["featured"]}>Featured</span>
            )}
          </div>
          <h1>{jobData.position}</h1>
          <div className={classes["stats-wrapper"]}>
            <span>{jobData.postedAt}.</span> <span>{jobData.contract}.</span>{" "}
            <span>{jobData.location}</span>
          </div>
        </div>
      </div>
      <div className={classes["roles-container"]}>
        {jobData.allJobListings.map((tool, index) => (
          <button
            key={index}
            onClick={buttonHandler}
            data-tools={tool}
            className={
              props.listOfFilteredJobs.includes(tool)
                ? classes["active"]
                : classes["default-btn"]
            }
          >
            {tool}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobListing;
