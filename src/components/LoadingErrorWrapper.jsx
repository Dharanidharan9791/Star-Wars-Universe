import React from "react";

const LoadingErrorWrapper = ({ loading, error, children }) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">Error: {error.message || "An unexpected error occurred."}</p>;
    return children;
};

export default LoadingErrorWrapper;
