let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

// let temp = varA;
// varA = varB;
// varB = varC;
// varC = temp;

[varA, varB, varC] = [varB, varC, varB];

console.log(varA, varB, varC);