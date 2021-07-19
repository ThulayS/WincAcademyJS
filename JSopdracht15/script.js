function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

let dropYellow = document.querySelector("#yellow");
let dropGreen = document.querySelector("#green");
let dropPurple = document.querySelector("#purple");
let dropBlue = document.querySelector("#blue");
let dropBlack = document.querySelector("#black");

dropYellow.addEventListener('click', () => dropYellow.style.backgroundColor = '#FFF000')
dropGreen.addEventListener('click', () => dropGreen.style.backgroundColor = '#7CFC00')
dropPurple.addEventListener('click', () => dropPurple.style.backgroundColor = '#800080')
dropBlue.addEventListener('click', () => dropBlue.style.backgroundColor = '#0000FF')
dropBlack.addEventListener('click', () => dropBlack.style.backgroundColor = '#000000')

dropYellow.addEventListener('click', () => document.body.style.backgroundColor = '#FFF000')
dropGreen.addEventListener('click', () => document.body.style.backgroundColor = '#7CFC00')
dropPurple.addEventListener('click', () => document.body.style.backgroundColor = '#800080')
dropBlue.addEventListener('click', () => document.body.style.backgroundColor = '#0000FF')
dropBlack.addEventListener('click', () => document.body.style.backgroundColor = '#000000')