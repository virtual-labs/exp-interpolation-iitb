let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Differentiation Method Based on Divided Difference</h5>
        <p>Learning Objective: Find f'(x)</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate y values", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <div id='a1-tab' ></div>

        <br>

       

        <br>

        <div id='tab-2'></div>

        <br>

        <div id='nxt' style='display: none;'>

             <p style='text-align: center; font-size: 18px;'><span style='display: inline-block;' >$$ f(x) = f(x_0) + (x - x_0)f_{a0}(x_0, x_1) + (x - x_0)(x - x_1)f_{b0}(x_0, x_1, x_2) $$</span></p>
        
            <p style='text-align: center; font-size: 18px;'><span style='display: inline-block;' >$$ f'(x) = xf_{a0}(x_0, x_1) + (2x - x_0 - x_1)f_{b0}(x_0, x_1, x_2) $$</span></p>

            <br>

            <div style='text-align: center;'><span style='font-size: 24px; display: inline-block;'>$$ f'(${X[0]}) \\ $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='f1-inp' > <span id='f1-val-sp'></span></div>

            <div style='text-align: center;'><span style='font-size: 24px; display: inline-block;'>$$ f'(${X[2]}) \\ $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='f3-inp' > <span id='f3-val-sp'></span></div>

            <br>

            <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a1();'  id='temp-btn-120' >Verify</button></div>


        </div>
        
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    show_xy();
    internal_calculations0();
    load_main_table();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations0() {
    f1 = X[0] * tb2_data[0][2] + (2 * X[0] - X[0] - X[1]) * tb2_data[0][3];
    f3 = X[2] * tb2_data[0][2] + (2 * X[2] - X[0] - X[1]) * tb2_data[0][3];
}
function show_xy() {
    let div = document.getElementById('a1-tab');
    let header = ['x'];
    tb_data = [['f(x)']];
    for (let i = 0; i < 3; i++) {
        header.push(` x<sub>${i}</sub> = ${X[i]}`);
        tb_data[0].push(Y[i]);
    }
    let tb = new Display_Table(header, tb_data, div);
    tb.load_table();
}
function verify_a1() {
    let btn = document.getElementById('temp-btn-120');
    console.log(`f'1 => ${f1}, f'2 => ${f3}`);
    let inp = document.getElementById('f1-inp');
    let sp = document.getElementById('f1-val-sp');
    let inp1 = document.getElementById('f3-inp');
    let sp1 = document.getElementById('f3-val-sp');
    if (!verify_values(parseFloat(inp.value), f1)) {
        alert("f1 value is incorrect, calculate again.");
        return;
    }
    if (!verify_values(parseFloat(inp1.value), f3)) {
        alert("f3 value is incorrect, calculate again.");
        return;
    }
    btn.remove();
    inp.remove();
    sp.innerText = `${f1.toFixed(2)}`;
    inp1.remove();
    sp1.innerText = `${f3.toFixed(2)}`;
    alert('Experiment Completed Successfully !!');
    //activity2();
}
function load_main_table() {
    let div = document.getElementById('tab-2');
    let header = ['X', 'Y', 'f<sub>a</sub>(x<sub>0</sub>, x<sub>1</sub>)', 'f<sub>b</sub>(x<sub>0</sub>, x<sub>1</sub>, x<sub>2</sub>)'];
    let tb = new Verify_Rows_Cols_Strings(header, tb2_data, [0, 1, 2], [[2, 3], [2], []], '', div, true, true, enable_f1_f3_cal);
    tb.load_table();
}
function enable_f1_f3_cal() {
    let d = document.getElementById('nxt');
    d.style.display = 'block';
}
activity1();
//# sourceMappingURL=activity1.js.map