// Your code here
function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(newarray) {
    return newarray.map( function(row) {
        //returns an object
        return  createEmployeeRecord(row);
    })
              
    
}

function createTimeInEvent (stamp) {
    let [date, hour] = stamp.split(' ')

    this.timeInEvents.push(
        {
            type: "TimeIn",
            hour: parseInt(hour),
            date,
}
        )
        return this
}

function hoursWorkedOnDate(daysWorked) {
    let startOfEvent = this.timeInEvents.find((e) => {
        return e.date == daysWorked;
    })
    let endOfEvent = this.timeOutEvents.find((x) => {
        return x.date == daysWorked;
    })
    return (startOfEvent.hour - endOfEvent.hour)/100

}


function wagesEarnedOnDate(dateSought){
    let rawWage = hoursWorkedOnDate.call(this, dateSought)
        * this.payPerHour
    return parseFloat(rawWage.toString())
}


let allWagesFor = function(){
    let eligibleDates = this.timeInEvents.map(function(e){
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
}

let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}