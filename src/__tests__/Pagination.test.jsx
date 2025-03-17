import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Pagination from "../components/Pagination";

describe("Pagination", () => {
  it("renders current page and total pages", () => {
    render(<Pagination currentPage={2} totalPages={5} onPageChange={() => {}} />);
    expect(screen.getByText(/Page 2 of 5/i)).toBeInTheDocument();
  });

  it("disables the Previous button on the first page", () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />);
    expect(screen.getByText(/Previous/i)).toBeDisabled();
  });

  it("disables the Next button on the last page", () => {
    render(<Pagination currentPage={5} totalPages={5} onPageChange={() => {}} />);
    expect(screen.getByText(/Next/i)).toBeDisabled();
  });

  it("calls onPageChange when Previous or Next is clicked", () => {
    const mockOnPageChange = vi.fn();
    render(<Pagination currentPage={2} totalPages={5} onPageChange={mockOnPageChange} />);

    fireEvent.click(screen.getByText(/Previous/i));
    expect(mockOnPageChange).toHaveBeenCalledWith(1);

    fireEvent.click(screen.getByText(/Next/i));
    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });
});
