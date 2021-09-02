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
    for (i of arr) {
        objs.push(createEmployeeRecord(i))
    }
    return objs
}

let twoRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ]

  let dataEmployees = [
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300],
    ["Byron", "Poodle", "Mascot", 3],
    ["Julius", "Caesar", "General", 27],
    ["Rafiki", "", "Aide", 10],
    ["Simba", "", "King", 100]
  ]

  let employeeRecords = createEmployeeRecords(twoRows)
  console.log(employeeRecords)