jest.mock('./dateUtils'); // <-- Important: This must be at the top

const dateUtils = require('./dateUtils');
//console.log('2. Imported mocked dateUtils module', dateUtils);//

const { generateWelcomeMessage} = require('./messageService');
//console.log('3. Imported the generate welcome message from message service');

//Mocking
test('should generate welcome message with mocked date', () => {
  dateUtils.getFormattedDate.mockReturnValue('April 8, 2025');
  const result = generateWelcomeMessage('Jane', new Date('2025-04-08'));
  expect(dateUtils.getFormattedDate).toHaveBeenCalled();

  expect(result).toBe('Hello Jane, today is April 8, 2025');
});
