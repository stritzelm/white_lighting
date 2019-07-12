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


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

