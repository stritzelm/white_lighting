function go_to_main_page() {
    window.location.replace("home_pg.html");
}
function go_to_about_page() {
    window.location.replace("about_page.html");
}

function go_to_events_page() {
    window.location.replace("events_page.html");
}
function go_to_merch_page() {
    window.location.replace("merch_page.html");
}

function go_to_tickets_page() {
    window.location.replace("tickets_page.html");
}

function go_to_team_page() {
    window.location.replace("team.html");
}

function go_to_instagram() {
    window.location.replace("https://www.instagram.com/whitelightning/?hl=en")
}

function go_to_facebook() {
    window.location.replace("https://www.facebook.com/whitelightning1332/")
}

function go_to_twitter() {
    window.location.replace("https://twitter.com/tjh1332?lang=hr")
}




var vidIndex = 1

function plusDiv(n) {
    showDiv(vidIndex += n)
}

function showDiv(n) {
    var i;
    var x = document.getElementsByClassName("myVids");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {vidIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}


var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 3 seconds
}

