const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const date = document.querySelector('.date')
const day = document.querySelector('.day')
const daysOfWeek = {
    0 : "Sun", 1 : "Mon", 2 : "Tue", 3 : "Wed", 4 : "Thu", 5 : "Fri", 6 : "Sat"
}

function digitalClock() {
    let currentDate = new Date()
    
    let currMonth = currentDate.getMonth()
    let currYear = currentDate.getFullYear()
    let currDate = currentDate.getDate()
    let currDay = currentDate.getDay()
    let currHr = currentDate.getHours()
    let currMin = currentDate.getMinutes()
    let currSec = currentDate.getSeconds()

    if (currMonth < 10) 
        currMonth = "0" + currMonth

    if (currDate < 10)
        currDate = "0" + currDate

    if (currHr < 10) 
        currHr = "0" + currHr
    
    if (currMin < 10)
        currMin = "0" + currMin

    if (currSec < 10)
        currSec = "0" + currSec

    hour.innerHTML = currHr + " :"
    minute.innerHTML = currMin + " :"
    second.innerHTML = currSec
    day.innerHTML = daysOfWeek[currDay]
    date.innerHTML = `${currDate}-${currMonth}-${currYear}`
}

setInterval(digitalClock, 1000)