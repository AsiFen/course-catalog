//* similarly to the other function I will create fucntion that takes 2 parameters
//*split the overtime sheet
//*loop through the lenght of the sheet
//* if the hours worked are  are greater than 40 hours
//*calculate the excess amount of hours
//* for each level multiply the excess hours with the level amount and overtime rate
//* retrun the overtime wage
//*

function tutorOvertimeWageCalculator(overtimesheet, level) {
    var hour_worked = overtimesheet.split('-');
    var sumHours = 0
    var overtimeWage = 0
    for (let i = 0; i < hour_worked.length; i++) {
        sumHours  +=  parseFloat(hour_worked[i])
    }
 var excessHours = sumHours - 40
 console.log(sumHours);
 var addPerc = 0
 if (level === 1){
percentageCalc = (excessHours) * 0.07 
addPerc = percentageCalc + (excessHours)
wage = addPerc * 75
 }
 if (level === 2){
    percentageCalc = (excessHours) * 0.09
    addPerc = percentageCalc + (excessHours)
    wage = addPerc *90
 }
 if (level === 3){
    percentageCalc = (excessHours) * 0.12 
    addPerc = percentageCalc + (excessHours)
    wage = addPerc *105
 }
 return wage
}
console.log(tutorOvertimeWageCalculator("8-8-8-8-8-9-5", 1))