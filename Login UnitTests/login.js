const usersDB = [
    { username: "alice", password: "password123" },
    { username: "bob", password: "secure456" },
  ];
  
  function login(username, password) {
    if (!username || !password) {
      throw new Error("Username and password are required");
    }
  
    const user = usersDB.find(
      (u) => u.username === username && u.password === password
    );
  
    if (!user) {
      return { success: false, message: "Invalid credentials" };
    }
  
    return { success: true, message: "Login successful" };
  }
  
  module.exports = { login };