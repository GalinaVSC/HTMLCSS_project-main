function testVar() {
    if (true) {
        var x = 5;
    }
    console.log(x); //5 (x is fuction-scoped, not block-scoped)
}
testVar();

console.log(y); //Underfined (hoisted)
var y = 100;
console.log(y); // 100