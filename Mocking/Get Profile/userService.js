export const fetchUserFromAPI = async (userId) => {
  // Simulating API call (we'll mock this in tests)
  const response = await fetch(`/api/users/${userId}`);
  return response.json();
};
