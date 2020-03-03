/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
    
      if (/\d+(\.\d+)?\/\d+(\.\d+)?/.test(input)) {
        var dividend = input.replace(/(\d+(\.\d+)?)\/(\d+(\.\d+)?)(.*)/, "$1")
        var divisor = input.replace(/(\d+(\.\d+)?)\/(\d+(\.\d+)?)(.*)/, "$3")
        console.log("dividend: " + dividend)
        console.log("divisor: " + divisor)
        
        input = (parseFloat(dividend) / parseFloat(divisor)).toString() + input.replace(/(\d+(\.\d+)?)\/(\d+(\.\d+)?)(.*)/, "$5")
        
        console.log(input)
        //What is being divided is called the dividend, which is divided by the divisor,
      } else if (/^(mi|km|lbs|kg|gal|L)$/.test(input)) {
        input = "1" + input
      }
      
      
    
      if (/\d+(\.\d+)?(mi|km|lbs|kg|gal|L)/.test(input)){
        var initNum = convertHandler.getNum(input);
        var initUnit = convertHandler.getUnit(input);
        var returnNum = convertHandler.convert(initNum, initUnit);
        var returnUnit = convertHandler.getReturnUnit(initUnit);
        var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

        res.json({ initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: toString }) 
      } else if (/mi|km|lbs|kg|gal|L/.test(input)) {
        res.json({ error: "invalid number" })
      } else if (/\d+(\.\d+)?/.test(input)) {
        res.json({ error: "invalid unit" })
      } else {
        res.json({ error: "invalid number and unit" })
      }
      
      
    });
    
};
