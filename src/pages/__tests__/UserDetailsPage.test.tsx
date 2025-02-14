import { render, screen } from "@testing-library/react";
import UserDetailsPage from "../../pages/UserDetailsPage";
import { MemoryRouter } from "react-router-dom";

jest.mock("../../utils/apiUtils", () => ({
  fetchUsers: jest.fn(() =>
    Promise.resolve([
      {
        id: 1,
        username: "testuser",
        email: "test@example.com",
        phone_no: "1234567890",
        date_joined: "2024-02-11T00:00:00.000Z",
        organization: "Test Org",
        status: "Active",
      },
    ])
  ),
}));

describe("UserDetailsPage", () => {
  it("renders user details when a user exists", async () => {
    render(
      <MemoryRouter initialEntries={["/user/1"]}>
        <UserDetailsPage />
      </MemoryRouter>
    );

    expect(await screen.findByText(/testuser/i)).toBeInTheDocument();
  });

  it("shows 'User not found' when no user exists", async () => {
    render(
      <MemoryRouter initialEntries={["/user/999"]}>
        <UserDetailsPage />
      </MemoryRouter>
    );

    expect(await screen.findByText(/User not found/i)).toBeInTheDocument();
  });
});
