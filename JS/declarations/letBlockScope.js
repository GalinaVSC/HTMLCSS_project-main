function letExample() {
    console.log(b); //RefetenceError: Cannot access 'b' before initialization
    let b = 20;
    console.log(b); //20
}
letExample();