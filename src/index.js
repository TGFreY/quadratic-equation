module.exports = function solveEquation(equation) {
    let arr = equation.split(" ");
    let answers = [];
    let a = +arr[0];
    let b = +arr[3].concat(arr[4]);
    let c = +arr[7].concat(arr[8]);
    let d = b * b - 4 * a * c;
    let x1 = Math.round((-b / (2 * a) + Math.sqrt(d) / (2 * a)));
    let x2 = Math.round((-b / (2 * a) - Math.sqrt(d) / (2 * a)));
    if (x1 > x2) {
        answers.push(x2);
        answers.push(x1);
    } else {
        answers.push(x1);
        answers.push(x2);
    }
    return answers;
}
