// function to check the car speed and assign demerit points
function speedDetector(speed) {
    // allowed speed
    const speedlimit = 70;
    //km/h above limit = 1 point
    const kmperpoint = 5;
    // calculate demerit points if speed is above the limit
    const points = Math.floor (speed - speedlimit) / (kmperpoint);
    // speed is within or equal to the limit
    if (speed <= speedlimit) {
        return "Ok.";
    }
    // what happens if points exceed 12
    else if (points > 12) {
        return "License suspended";
    }
    else {
        return `points: ${points}`
    }

}
// testing the function with different values
console.log(speedDetector(155));
// license suspended
console.log(speedDetector(15));
//ok
console.log(speedDetector(55));
//ok
console.log(speedDetector(5));
//ok
console.log(speedDetector(75));
//points: 1