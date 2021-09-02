// Your code here

function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arr) {
    let objs = []
    for (let i of arr) {
        objs.push(createEmployeeRecord(i))
    }
    return objs
}

function createTimeInEvent(obj, timeStamp) {
    let newObj = {
        type: "TimeIn",
        hour: parseInt(timeStamp.slice(11,)),
        date: timeStamp.slice(0,10)
    }
    obj.timeInEvents.push(newObj)
    return obj
}

function createTimeOutEvent(obj, timeStamp) {
    let newObj = {
        type: "TimeOut",
        hour: parseInt(timeStamp.slice(11,)),
        date: timeStamp.slice(0,10)
    }
    obj.timeOutEvents.push(newObj)
    return obj
}

function hoursWorkedOnDate(obj, timeStamp) {
    let start = obj.timeInEvents.find(arr => arr.date === (timeStamp))
    let finish  = obj.timeOutEvents.find(arr => arr.date === (timeStamp))
    //console.log(typeof(start))
    return (finish.hour - start.hour) / 100
}

function wagesEarnedOnDate(obj, timeStamp) {
    let timeWorked = hoursWorkedOnDate(obj, timeStamp)
    let rate = obj.payPerHour
    return timeWorked * rate
}


function allWagesFor(obj) {
    let datesWorked = []
    let runningTotal = 0
    for (let i of obj.timeInEvents) {
        datesWorked.push(i.date)
    }
    //console.log(datesWorked)

    for (let i of datesWorked) {
        //console.log(i)
        runningTotal += wagesEarnedOnDate(obj, i)
    }

    return runningTotal

}



function calculatePayroll(arr) {
    let acc = 0
    return arr.reduce(reduce, 0) 
}

function reduce(acc, i) {
    return acc + allWagesFor(i)
}       

