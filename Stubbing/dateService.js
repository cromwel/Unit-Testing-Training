const dateUtils = require('./dateUtils'); // Import dateUtils

function isWeekend() {
    const today = dateUtils.getCurrentDate();
    const day = today.getDay(); // 0 = Sunday, 6 = Saturday
    return day === 0 || day === 6;
  }
  
  module.exports = {isWeekend};