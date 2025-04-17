function getFormattedDate(date) {
    console.log('Before transformation:', date); 
    const formattedDate = date.toLocaleDateString('en-UK');
    console.log('After transformation:', formattedDate);
    return formattedDate;
  }
  
module.exports = { getFormattedDate};

//getFormattedDate(new Date());
  