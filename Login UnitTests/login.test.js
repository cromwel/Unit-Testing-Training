const { login } = require("./login");

describe("Login Module", () =>{
    test("should login successfully with correct credentials",() => {
        const result = login("alice", "password123");
        expect(result.success).toBe(true);
        expect(result.message).toBe("Login successful");
  });
});
  describe("Sign up Module", () =>{
  test("should login fail with inccorrect credentials",() => {
    const result = login("cromwel", "password123");
    expect(result.success).toBe(false);
    expect(result.message).toBe("Invalid credentials");
});
});