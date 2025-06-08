function addition() {
    let b = Number(document.getElementById("firstSum").value);
    let c = Number(document.getElementById("secondSum").value);
    let sum = b + c;
    document.getElementById("demoPlus").textContent = sum;
}
        
function difference() {
    let b = Number(document.getElementById("firstDiff").value);
    let c = Number(document.getElementById("secondDiff").value);
    let diff = b - c;
    document.getElementById("demoMinus").innerHTML = diff;
}

function multiplication() {
    let b = Number(document.getElementById("firstMult").value);
    let c = Number(document.getElementById("secondMult").value);
    let mult = b * c;
    document.getElementById("demoMult").innerHTML = mult;
}
function division() {
    let b = Number(document.getElementById("firstDivi").value);
    let c = Number(document.getElementById("secondDivi").value);
    let divi= b / c;
    document.getElementById("demoDivi").innerHTML = divi;
}
function exponentiation() {
    let b = Number(document.getElementById("firstExpo").value);
    let c = Number(document.getElementById("secondExpo").value);
    let expo= b ** c;
    document.getElementById("demoExpo").innerHTML = expo;
}
