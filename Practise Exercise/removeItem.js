//Define a function named `removeItem` that takes an array `arr` and a value `item` to remove
function removeItem(arr, item){

// Use the `filter` method to create a new array
// The filter keeps only the elements that are NOT equal to item
    return arr.filter(i=>i !==item);
}
module.exports = removeItem;