// No arguments

const paintThis = function () {

    console.log("The wall has been painted red ");

};

paintThis();

// Single arguments
const paint = function (color) {

    console.log("The wall has been painted " + color);

};

const wallColor = "green"
const kitchenColor = "blue"

paint(wallColor);
paint(kitchenColor);
paint();

// multiple arguments

const paintWall = function (colorA, colorB) {

    console.log("The north wall has been painted " + colorA);

    console.log("The south-east wall has been painted " + colorB)

};

const northWall = "orange";
const southWall = "grey";

paintWall(northWall, southWall);