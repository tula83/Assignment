function add() {
    // var n1=document.getElementById("first_num").value;
    // var n2=document.getElementById("second_num").value;
    // var result=Number(n1)+Number(n2);
    //c=document.getElementById("para");


    var a = +document.getElementById('first_num').value;
    var b = +document.getElementById("second_num").value;
    var c = document.getElementById("para")
    if (isNaN(a) || isNaN(b)) {
        c.innerHTML = "<h2>Please provid number </h2> ";
    }
    else {
        c.innerHTML = a + b;
    }
}

function subtract() {
    var a = +document.getElementById('first_num').value;
    var b = +document.getElementById("second_num").value;
    var c = document.getElementById("para")
    if (isNaN(a) || isNaN(b)) {
        c.innerHTML = "<h2>Please provid number </h2> ";
    }
    else {
        c.innerHTML = a - b;
    }

}


function subtract() {
    var a = +document.getElementById('first_num').value;
    var b = +document.getElementById("second_num").value;
    var c = document.getElementById("para")
    if (isNaN(a) || isNaN(b)) {
        c.innerHTML = "<h2>Please provid number </h2> ";
    }
    else {
        c.innerHTML = a - b;
    }

}


function div() {
    var a = +document.getElementById('first_num').value;
    var b = +document.getElementById("second_num").value;
    var c = document.getElementById("para")
    if (isNaN(a) || isNaN(b)) {
        c.innerHTML = "<h2>Please provid number </h2> ";
    }
    else if (b == 0) {
        c.innerHTML = "<h2>Infinite</h2>"
    }

    else {
        c.innerHTML = a / b;
    }

}
function mult() {
    var a = +document.getElementById('first_num').value;
    var b = +document.getElementById("second_num").value;
    var c = document.getElementById("para")
    if (isNaN(a) || isNaN(b)) {
        c.innerHTML = "<h2>Please provid number </h2> ";
    }
    else {
        c.innerHTML = a * b;
    }

}
