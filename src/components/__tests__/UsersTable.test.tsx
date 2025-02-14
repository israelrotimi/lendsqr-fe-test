import { render, screen } from "@testing-library/react";
import UsersTable from "../UsersTable";

const mockUsers = [
  {
    id: 1,
    username: "testuser",
    email: "test@example.com",
    phone_no: "1234567890",
    date_joined: "2024-02-11T00:00:00.000Z",
    organization: "Test Org",
    status: "Active",
  },
];

describe("UsersTable Component", () => {
  it("renders table headers correctly", () => {
    render(<UsersTable users={mockUsers} />);
    expect(screen.getByText(/organization/i)).toBeInTheDocument();
    expect(screen.getByText(/username/i)).toBeInTheDocument();
  });

  it("renders a user row", () => {
    render(<UsersTable users={mockUsers} />);
    expect(screen.getByText(/testuser/i)).toBeInTheDocument();
  });
});
