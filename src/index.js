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