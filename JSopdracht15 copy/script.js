function dropIt() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        let openDropdown = dropdowns[0];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}


let dropYellow = document.querySelector("#yellow")
let dropGreen = document.querySelector("#green");
let dropPurple = document.querySelector("#purple");
let dropBlue = document.querySelector("#blue");
let dropBlack = document.querySelector("#black");


dropYellow.addEventListener('click', () => {
    const yellow = '#FFF000';
    dropYellow.style.backgroundColor = yellow;
    document.body.style.backgroundColor = yellow;
})

dropGreen.addEventListener('click', () => {
    const green = '#7CFC00';
    dropGreen.style.backgroundColor = green;
    document.body.style.backgroundColor = green;
})

dropPurple.addEventListener('click', () => {
    const purple = '#800080';
    dropPurple.style.backgroundColor = purple;
    document.body.style.backgroundColor = purple;
})

dropBlue.addEventListener('click', () => {
    const blue = '#0000FF';
    dropBlue.style.backgroundColor = blue;
    document.body.style.backgroundColor = blue;
})

dropBlack.addEventListener('click', () => {
    const black = '#000000';
    dropBlack.style.backgroundColor = black;
    document.body.style.backgroundColor = black;
})
