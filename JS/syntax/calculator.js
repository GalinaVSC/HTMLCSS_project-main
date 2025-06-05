function addition() {
    let b = Number(document.getElementById("firstSum").value);
    let c = Number(document.getElementById("secondSum").value);
    let a = b + c;
    document.getElementById("demoPlus").innerHTML = a;
}
        
function difference() {
    let b = Number(document.getElementById("firstDiff").value);
    let c = Number(document.getElementById("secondDiff").value);
    let a = b - c;
    document.getElementById("demoMinus").innerHTML = a;
}