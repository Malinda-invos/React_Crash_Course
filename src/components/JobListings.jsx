import { React, useState, useEffect } from "react";
import JobListing from "./jobListing";
import Spinners from "./Spinners";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiURL = isHome ? "api/jobs?_limit=3" : "api/jobs";
    const fetchJobs = async () => {
      try {
        const res = await fetch(apiURL);
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.log("Error Fetching Data " + err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  //const jobListings = isHome ? jobs.slice(0, 3) : jobs;

  return (
    <div>
      {" "}
      {/* <!-- Browse Jobs --> */}
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "All Jobs"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loading ? (
              <Spinners loading={loading} />
            ) : (
              <>
                {" "}
                {jobs.map((job) => (
                  <JobListing key={job.id} job={job} />
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobListings;
