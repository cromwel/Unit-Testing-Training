jest.mock('./dateUtils'); // <-- Mock dateUtils at the top
const dateUtils = require('./dateUtils');
const { isWeekend } = require('./dateService');

// Stubbing
test('should return true if the date is a weekend', () => {
  const fakeSunday = new Date('2025-04-06'); // Sunday
  dateUtils.getCurrentDate.mockReturnValue(fakeSunday); // Mock return value for getCurrentDate()

  const result = isWeekend();
  expect(result).toBe(true); // Expect isWeekend to return true for a Sunday
});

test('should return false if the date is a weekday', () => {
  const fakeWednesday = new Date('2025-04-02'); // Wednesday
  dateUtils.getCurrentDate.mockReturnValue(fakeWednesday); // Mock return value for getCurrentDate()

  const result = isWeekend();
  expect(result).toBe(false); // Expect isWeekend to return false for a Wednesday
});
