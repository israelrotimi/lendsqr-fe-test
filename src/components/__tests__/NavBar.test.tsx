import { render, screen } from "@testing-library/react";
import NavBar from "../NavBar";

describe("NavBar Component", () => {
  it("renders the navigation bar correctly", () => {
    render(<NavBar />);
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });
});
