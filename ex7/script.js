// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp


var homepage = document.getElementById("accordion");



function showDiv() {
    homepage.style.display = "block";
}

function closeDiv() {
    homepage.style.display = "none";
}


homepage.addEventListener("click", function() {
    if (homepage.style.display === "block") {
        closeDiv()
    } else {
        showDiv()
    }
})

