function varExample() {
    console.log(a); //Underfined (hoisted but not initialized)
    var a = 10;
    console.log(a); //10
}
varExample();