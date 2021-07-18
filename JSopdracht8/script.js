// Checking if a number is big

const check = function (number) {
    con = number;
    if (number > 100) {
        return true;
    }
    return "false";

}

// console.log(check(100));

// Bouncer at a club

const clubEnterance = function (maxNo, currentNo, age) {
    if (age < 18) {
        return "This is a club for adults";
    };

    const sum = currentNo - maxNo;
    if (sum < 0) {
        return "It's to busy now, come back later!";
    };
    return "Come in!";
}

const myAge = 21;
const clubAtt = 57;
const clubMaxatt = 109;

// console.log(clubEnterance(clubAtt, clubMaxatt, myAge));

// calculating average

const calculateAverage = function (numbers) {
    const average = numbers.reduce((total, n) => total + n) / numbers.length;
    return average;
};

const grades = [1, 2];
console.log(Math.round(calculateAverage(grades)));

// console.log (Math.round(calculateAverage([1, 2])));