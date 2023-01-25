import React from "react";
import ReactLoading from "react-loading";

export const Loading = ({ loading }) => {
  if (!loading) return null;
  return (
    <div style={{ margin: "0px auto" }}>
      <ReactLoading type="bubbles" color="#0055ff" width="6.25rem" />
    </div>
  );
};
