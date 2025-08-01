//Get the date and time.
//So We want the counter to start at 14 days.
let countDownDate = new Date("Aug 15, 2025 12:00:00").getTime();

//Update every 1 second
let x = setInterval(function() {
    //get today's d & t
    var today = new Date().getTime();

    //Find the distance
    let distance = countDownDate - today;

    //Time calculations
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Displays
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
})