// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

var button = document.getElementById("myButton");

button.addEventListener("click", function() {
    var color = document.querySelectorAll("div");
    color.forEach(Element => {Element.style.backgroundColor = "blue";})

})