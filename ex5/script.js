// Add a box to "boxContainer" everytime you click the button
// HINT: Look up createElement(), appendChild()
// HINT HINT: You can add the "box" class to elements like so: https://www.w3schools.com/howto/howto_js_add_class.asp

var addition = document.getElementById("myButton");

addition.addEventListener('click', function() {
    var element1 = document.createElement('div');
    element1.classList.add("box");
    var element2 = document.getElementById('boxContainer');
    element2.appendChild(element1);
})