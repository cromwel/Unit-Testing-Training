import { getUserProfile } from './userController.js';
import * as userService from './userService.js';

describe('getUserProfile', () => {
  beforeEach(() => {
    jest.spyOn(userService, 'fetchUserFromAPI').mockResolvedValue({
      name: 'Alice Johnson',
      email: 'alice@example.com',
      active: true,
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should return user profile with name, email, and isActive', async () => {
    const result = await getUserProfile('123');

    expect(userService.fetchUserFromAPI).toHaveBeenCalledWith('123');
    expect(result).toEqual({
      name: 'Alice Johnson',
      email: 'alice@example.com',
      isActive: true,
    });
  });
});
