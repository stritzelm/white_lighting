function go_to_main_page() {
    window.location.replace("main_page.html");
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
    window.location.replace("team_page.html");
}

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";

    document.getElementById("myOverlay").style.display = "block";

}


function w3_close() {
    document.getElementById("mySidebar").style.display = "none";

    document.getElementById("myOverlay").style.display = "none";

}


// Modal Image Gallery

function onClick(element) {
    document.getElementById("img01").src = element.src;

    document.getElementById("modal01").style.display = "block";

    var captionText = document.getElementById("caption");

    captionText.innerHTML = element.alt;

}