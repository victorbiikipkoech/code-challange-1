
function giveGrade(a) {
    let result;
    if(a < 40) {
        result = 'E';
    if(a > 40 && a < 49) {
        result = 'D';
    if(a > 49 && a < 59) {
        result = 'C';
    if(a > 59 && a < 79 ) {
        result = 'B';
    if(a > 79 && a < 100) {
        result = 'A'; 
    }  else {
        result = 'NO grade'
    }
    
        return result;
}
console.log(giveGrade(50)));
