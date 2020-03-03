/*
*
*
*       Complete the handler logic below
*       
*       
*/

var formatter = new Intl.NumberFormat('en-US', {
   minimumFractionDigits: 5,      
   maximumFractionDigits: 5,
});

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = 0;
    var inputArray = []
    var inputArray = input.split('')
  
       
    result = inputArray.filter((letter, index) => {
      if (/\d|\./.test(letter.toLowerCase())){
        return true;
      }
    })

    result = result.join('')

    return formatter.format(parseFloat(result));
  };
  
  this.getUnit = function(input) {
    var result = "";
    var inputArray = []
    var inputArray = input.split('')
  
       
    result = inputArray.filter((letter, index) => {
      if (/[a-z]/.test(letter.toLowerCase())){
        return true;
      }
    })

    result = result.join('')
    console.log(result)
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    switch(initUnit){
      case "mi":
        return "km"
      case "lbs":
        return "kg"
      case "gal":
        return "L"
      case "km":
        return "mi"
      case "kg":
        return "lbs"
      case "L":
        return "gal"
    }
    
  };

  this.spellOutUnit = function(unit) {    
    switch(unit){
      case "mi":
        return "miles"
      case "lbs":
        return "pounds"
      case "gal":
        return "gallons"
      case "km":
        return "kilometers"
      case "kg":
        return "kilograms"
      case "L":
        return "liters"
    } 
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    switch(initUnit){
      case "mi":
        return formatter.format(initNum * miToKm)
      case "lbs":
        return formatter.format(initNum * lbsToKg)
      case "gal":
        return formatter.format(initNum * galToL)
      case "km":
        return formatter.format(initNum / miToKm)
      case "kg":
        return formatter.format(initNum / lbsToKg)
      case "L":
        return formatter.format(initNum / galToL)
    } 
    
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var text = " converts to ",
        initUnitString = this.spellOutUnit(initUnit),
        returnUnitString = this.spellOutUnit(returnUnit);
    
    return initNum + " " + initUnitString + text + returnNum + " " + returnUnitString;
  };
  
}

module.exports = ConvertHandler;
