import React from "react";

const LoadingErrorWrapper = ({ loading, error, children }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return children;
};

export default LoadingErrorWrapper;
