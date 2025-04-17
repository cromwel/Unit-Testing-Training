import { fetchUserFromAPI } from './userService.js';

export const getUserProfile = async (userId) => {
  const user = await fetchUserFromAPI(userId);
  return {
    name: user.name,
    email: user.email,
    isActive: user.active,
  };
};
