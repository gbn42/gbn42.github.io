var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
    var logo1 = document.querySelector(".logo1");
    var logo2 = document.querySelector(".logo2");

    if (window.scrollY > 0) {
        logo1.style.display = "none";
        logo2.style.display = "block";
    } else {
        logo1.style.display = "block";
        logo2.style.display = "none";
    }
});