import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LoadingErrorWrapper from "../components/LoadingErrorWrapper";

describe("LoadingErrorWrapper", () => {
  it("renders loading state", () => {
    render(<LoadingErrorWrapper loading={true} error={null} />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it("renders error state", () => {
    render(<LoadingErrorWrapper loading={false} error={{ message: "Error occurred" }} />);
    expect(screen.getByText(/Error: Error occurred/i)).toBeInTheDocument();
  });

  it("renders children when no loading or error", () => {
    render(
      <LoadingErrorWrapper loading={false} error={null}>
        <p>Child Component</p>
      </LoadingErrorWrapper>
    );
    expect(screen.getByText(/Child Component/i)).toBeInTheDocument();
  });
});
