//* similarly to the other function I will create fucntion that takes 2 parameters
//*split the overtime sheet
//*loop through the lenght of the sheet
//* if the hours worked are  are greater than 40 hours
//*calculate the excess amount of hours
//* for each level multiply the excess hours with the level amount and overtime rate
//* retrun the overtime wage
//*

function tutorOvertimeWageCalculator(overtimesheet) {
    var hour_worked = overtimesheet.split('-');
    var sumHours = 0
    for (var i = 0; i < hour_worked.length; i++) {
        sumHours += parseFloat(hour_worked)
    }
if 
return sumHours
}
console.log(tutorOvertimeWageCalculator("8-8-8-8-8-9-5"))