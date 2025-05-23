const text = '{"name":"John", "birth":"1986-12-14","city":"New York"}';
const obj = JSON.parse(text, function(key, value) {
    if (key == "name") {
        return value.toUpperCase();
    } 
    if (key == "birth") {
        return new Date(value);
    }   
    if (key == "city") {
        return value.toUpperCase();
    }
    else {
        return value;
    }
});
document.getElementById("demo").innerHTML = obj.name+ ", " + obj.birth + ", " + obj.city;



