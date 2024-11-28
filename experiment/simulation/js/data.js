// trapazium ----------------------------------------------------------------
let tb_data = [];
let tb2_data = [];
let f1 = 0;
let f3 = 0;
let I_val = 0;
//all variables
let X = [];
function initialize_X() {
    let ini = Math.round(Math.random() * 3 + 1);
    X = [ini, ini + 1, ini + 2];
}
initialize_X();
let Y = [];
let y = Y[0];
let x = X[0] + 0.5;
console.log(`x => ${x}`);
let x_ex = X[0] - 0.5;
console.log(`x_ex => ${x_ex}`);
for (let i = 0; i < X.length; i++) {
    Y.push((Math.pow(X[i], 4)) + Math.round(Math.random() * 3 + 2));
}
function load_tb2() {
    for (let i = 0; i < 3; i++) {
        tb2_data.push([`X<sub>${i}</sub> = ` + X[i], Y[i]]);
    }
    //calculcate f(x0, x1) 
    tb2_data[0].push((Y[1] - Y[0]) / (X[1] - X[0]));
    tb2_data[1].push((Y[2] - Y[1]) / (X[2] - X[1]));
    tb2_data[2].push('-');
    //calculcate f(x0, x1, x2) 
    tb2_data[0].push((tb2_data[1][2] - tb2_data[0][2]) / (X[2] - X[0]));
    tb2_data[1].push('-');
    tb2_data[2].push('-');
    console.log(tb2_data);
}
load_tb2();
//# sourceMappingURL=data.js.map