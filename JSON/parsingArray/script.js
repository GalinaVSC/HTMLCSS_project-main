const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);
//document.getElementById("demo").innerHTML = myArr[0] + "," + myArr[1] + "," + myArr[2] + "," + myArr[3];//
document.getElementById("demo").innerHTML = myArr.join(' ');