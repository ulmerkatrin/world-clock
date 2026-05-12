function updateTime() {

let honoluluElement = document.querySelector("#honolulu");
let honoluluDateElement = honoluluElement.querySelector(".date");
let honoluluTimeElement = honoluluElement.querySelector(".time");
let honoluluTime = moment().tz("Pacific/Honolulu");
honoluluDateElement.innerHTML = honoluluTime.format("MMMM Do YYYY");
honoluluTimeElement.innerHTML = honoluluTime.format("h:mm:ss a");

let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");
tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss a");

let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment().tz("America/New_York");
newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss a");
}

updateTime();
setInterval(updateTime, 1000);

function updateCity (event) {
    let cityTimeZone = event.target.value
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityTime = moment().tz(cityTimeZone);
    let cityName = cityTimeZone.replace("_", " ").split("/") [1];
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
    <div>
    <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
        <div class="time">${cityTime.format("h:mm:ss a")}</div>`
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
