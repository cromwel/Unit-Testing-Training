const { add, subtract, multiply, divide } = require('./math');

const x= 2;
const y= 3;
const z=5;
test('adds 2 + 3 to equal 5', () => { 
    expect(add(x, y)).toBe(z); //
});

test("adds 4 +4 not equal 9", ()=>{
    expect(add(4,4)).not.toBe(9);

});

test('subtract 5 from 10 to equal 5', ()=> {
    expect(subtract(10,5)).toBe(5);
});

test('should give the product of two numbers',()=> {
    expect(multiply(3,5)).toBe(15);
});

test('gives out division of two numbers',()=> {
    expect(divide (9,3)).toBe(3);
});


test('adds two numbers correctly', () => {
    // Arrange: Set up the input values
    const num1 = 5;
    const num2 = 3;
    const expected = 8;

    // Act: Call the function with inputs
    const result = add(num1, num2);

    // Assert: Verify the output
    expect(result).toBe(expected);
}
)
