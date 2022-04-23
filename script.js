// countdown timer start

var countDownDate = new Date("jul 5, 2023 00:00:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var year = Math.floor(distance / (1000 * 60 * 60 * 24 * 30 * 12));
    var months = Math.floor((distance % (1000 * 60 * 60 * 24 * 30 * 12)) / (1000 * 60 * 60 * 24 * 30));
    var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = year + "y " + months + "m " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Expired";
    }
}, 1000);

// countdown timer end 




// mobile menu start

const menuBtn = document.querySelector(".mobile-menu-btn");

menuBtn.addEventListener("click", (e) => {
    e.preventDefault;
    const navBar = document.querySelector(".mobile-navbar");
    navBar.classList.toggle('active')
    menuBtn.classList.add('active');
});

const closeBtn = document.querySelector(".btn-close");

closeBtn.addEventListener("click", (e) => {
    e.preventDefault;
    const navBar = document.querySelector(".mobile-navbar");
    navBar.classList.remove('active')
    menuBtn.classList.remove('active');
});


// mobile menu end