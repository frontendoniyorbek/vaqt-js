const elHour = document.querySelector('#hour')
const elMInuts = document.querySelector('#minuts')
const elSecond = document.querySelector('#second')
const elWeek = document.querySelector('#week')
const elMonth = document.querySelector('#month')
const elFullYear = document.querySelector('#full-day')
const elFullWeek = document.querySelector('#full-week')
const elYears = document.querySelector('#year')

// TIME
function getTime() {
    const now = new Date()
    const date = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
    const month = now.getMonth() < 10 ? '0' + (now.getMonth() + 1) : now.getMonth()
    const year = now.getFullYear()
    const hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours()
    const minut = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()
    const second = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()

    const week = [
        "Yakshanba",
        "Dushanba",
        "Seshanba",
        "Chorshanba",
        "Payshanba",
        "Juma",
        "Shanba"
    ]

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    const day_title = now.getDay()
    elHour.textContent = hour + ':'
    elMInuts.textContent = minut + ':'
    elSecond.textContent = second
    elFullYear.textContent = `${date} ${months[month]}, ${year}`
    elFullWeek.textContent = `${week[day_title]}`
}

setInterval(getTime, 1000)