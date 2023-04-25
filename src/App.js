import React, { useState } from "react";

import jsonData from "./data.json";
import Header from "./Components/Header";
import JobListing from "./Components/JobListing";

function App() {
  const [listedJobs, setListedJobs] = useState(jsonData);
  const [listOfFilteredJobs, setListOfFilteredJobs] = useState([]);

  const submitButtonHandler = function (tool) {
    setListOfFilteredJobs((prev) => [...prev, tool]);
    const filteredJobs = listedJobs.filter((data) =>
      data.allJobListings?.includes(tool)
    );

    setListedJobs(filteredJobs);
  };

  const removeFilterHandler = function (tool) {
    const returnedfilter = listOfFilteredJobs.splice(
      listOfFilteredJobs.indexOf(tool),
      1
    );

    setListOfFilteredJobs((prev) =>
      prev.filter((data) => !data.includes(returnedfilter))
    );

    const listOfRemovedFilterJobs = jsonData.filter((job) =>
      listOfFilteredJobs.every((filter) => job.allJobListings.includes(filter))
    );
    setListedJobs(listOfRemovedFilterJobs);
  };

  const resetJobFilter = () => {
    setListOfFilteredJobs([]);
    setListedJobs(jsonData);
  };

  return (
    <React.Fragment>
      <Header
        listOfFilteredJobs={listOfFilteredJobs}
        onRemove={removeFilterHandler}
        reset={resetJobFilter}
      />
      <div className="container">
        {listedJobs &&
          listedJobs.map((data) => (
            <JobListing
              JobListings={data}
              key={data.id}
              onFilter={submitButtonHandler}
              listOfFilteredJobs={listOfFilteredJobs}
            />
          ))}
      </div>
    </React.Fragment>
  );
}

export default App;
