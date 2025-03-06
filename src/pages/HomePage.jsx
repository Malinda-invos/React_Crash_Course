import React from "react";

import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import JobListings from "../components/JobListings";
import ViewAll from "../components/ViewAll";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCard />
      <JobListings isHome="true" />
      <ViewAll />
    </>
  );
};

export default HomePage;
