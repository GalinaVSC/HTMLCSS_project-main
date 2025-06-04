function convert2C() {
    let x = document.getElementById("celsiusInput").value;
    f = (x * 1.8) + 32;
    document.getElementById("demoF").innerHTML = f + " °F";
}
function convert2F() {
    let x = document.getElementById("fahrenheitInput").value;
    c = (x - 32) / 1.8;
    document.getElementById("demoC").innerHTML = c + " °C";
}