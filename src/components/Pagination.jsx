import React from "react";
import Button from "./Button";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    return (
        <div className="flex justify-center items-center space-x-4 mt-4">
            <Button
                variant="tertiary"
                onClick={handlePrevious}
                disabled={currentPage === 1}
            >
                Previous
            </Button>
            <span className="text-lg font-semibold">
                Page {currentPage} of {totalPages}
            </span>
            <Button
                variant="primary"
                onClick={handleNext}
                disabled={currentPage === totalPages}
            >
                Next
            </Button>
        </div>
    );
};

export default Pagination;
