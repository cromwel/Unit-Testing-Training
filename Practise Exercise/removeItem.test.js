const removeItem = require('./removeItem');
// Start a test suite for the 'removeItem' function
describe('removeItem', () => {
  // Test case 1: Check if a specific item is removed from the array
  it('should remove the item from the array', () => {
    // Call the function with [1, 2, 3] and remove 2
    const result = removeItem([1, 2, 3], 2);
    // Expect the result to be [1, 3] (2 is removed)
    expect(result).toEqual([1, 3]);
  });
  // Test case 2: Ensure the original array is not changed (function is pure)
  it('should not modify the original array', () => {
    const original = [1, 2, 3]; // Define original input array
    const result = removeItem(original, 2); // Call the function
    expect(original).toEqual([1, 2, 3]); // The original array should remain unchanged
  });
  // Test case 3: If the item to remove is not found, return the original array as-is
  it('should return the same array if item is not found', () => {
    const result = removeItem([1, 2, 3], 4); // 4 is not in the array
    expect(result).toEqual([1, 2, 3]); // So the result should be the same as input
  });
});