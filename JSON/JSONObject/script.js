const text = '{"name":"John", "age":"30","city":"New York"}';
const obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age+ ", " + obj.city;