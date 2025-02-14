import { render, screen } from "@testing-library/react";
import SideBar from "../SideBar";

describe("SideBar Component", () => {
  it("renders the sidebar", () => {
    render(<SideBar />);
    expect(screen.getByText(/users/i)).toBeInTheDocument();
  });
});
