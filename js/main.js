document.addEventListener('DOMContentLoaded', (event) => {

    /* Adding shadows on inactive navigation links */

    var navLinks = document.querySelectorAll("nav > a");

    for(i = 0; i < navLinks.length; i++){

        var previous = navLinks[i-1];
        var next = navLinks[i+1];

        navLinks[i].classList.add("not-active");
        
        if (navLinks[i].classList.contains("active")){
            navLinks[i].classList.remove("not-active");
            navLinks[i].style.fontWeight = "bold";
            previous.classList.add("right-box");
            next.classList.add["not-active"];
        }
    }
});