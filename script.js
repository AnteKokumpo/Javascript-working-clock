// Function for current time 
function currentTime() {
    let date = new Date();
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","cuma","Cumartesi"]  
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let dayName = date.getDay();

    document.querySelector("#myClock").innerHTML =  `${hour}:${minute}:${second}  ${days[dayName]}`
}
// For working clock
setInterval(currentTime,1000);


let myName = document.querySelector("#myName")
myName.innerHTML = `${prompt("Please enter your name ?")}`
currentTime();






