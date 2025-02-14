import { fetchUsers } from "../apiUtils";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
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
      ]),
  })
) as jest.Mock;

describe("fetchUsers", () => {
  it("fetches users correctly", async () => {
    const users = await fetchUsers();
    expect(users).toHaveLength(1);
    expect(users[0].username).toBe("testuser");
  });
});
