//* create function with two parameters, timesheet and level 
//* splii the timesheet with split method using the dash
//* create if condition for greater than 5 and less than 7 both are inclusive
//* create else statement that return zero when above condition  not met
//* loop throuhg the length of the hours worked.
//*create if conditions for all 3 level 
//*under each level calculate the wage pay by multiplying the hours worked with the level pay 
//* return the wage pay at the end of the for loop
//* <3







function tutorWageCalculator(timesheet, level) {
    var hours_worked = timesheet.split('-');
var wage_pay = 0
    if (hours_worked.length >= 5 && hours_worked.length <= 7) {
        for (let i = 0; i < hours_worked.length; i++) {
            if (level === 1 ){
                wage_pay += parseFloat(hours_worked[i])  * 75
            }
            if (level === 2 ){
                wage_pay += parseFloat(hours_worked[i])  * 90
            }
            if (level === 3 ){
                wage_pay += parseFloat(hours_worked[i]) * 105
            }
        }
        return wage_pay
    }

    else {
        return 0
    }

}
console.log(tutorWageCalculator("3-7-2-3-4", 2))