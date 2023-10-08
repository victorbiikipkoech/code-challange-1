function giveGrade(x) {
    if(x >= 79 && x <= 100) {
        return 'A';
}   if (x >=60 && x <= 78) {
        return 'B';
}   if (x >= 49 && x <= 59) {
        return 'C';
}   if (x >= 40 && x <= 48) {
            return 'D';
}    if (x > 40) {
            return 'E';
}     else {
    return 'NO Grade'
 }   
}
console.log(giveGrade());