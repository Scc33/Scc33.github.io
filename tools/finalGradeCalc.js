function finalGradeCalc(desiredGrade, currGrade, finalWorth) {
    var neededFinalGrade = ((desiredGrade * 100) - (currGrade * (100 - finalWorth))) / finalWorth;
    console.log(neededFinalGrade);
}