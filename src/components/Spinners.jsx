import ClipLoader from "react-spinners/ClipLoader";
import React from "react";
const override = {
  display: "block",
  margin: "100px auto",
};

const Spinners = ({ loading }) => {
  return (
    <div>
      {" "}
      <ClipLoader
        color="#4338ca"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinners;
