function grade(mark) {
   
   // What happens when the number is less than 0 or greater than 100
   if (mark < 0 || mark > 100) {
    return "Error: mark must be between 0 and 100"
   } 
   //grading rules
   if (mark > 79) {
    return "A";
   } else  if (mark >= 60) {
    return "B";
   } else if (mark >= 49) {
    return "C";
   } else if (mark >= 40) {
    return "D";
   } else {
    return "E";
   }
}
//testing the function

console.log(grade(90));
// A
console.log(grade(69));
// B
console.log(grade(49));
// C
console.log(grade(45));
// D
console.log(grade(9));
// E

