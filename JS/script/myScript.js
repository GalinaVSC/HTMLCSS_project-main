function myFunction() {
    document.getElementById("demo").innerHTML = "Что для меня утро, это время прогулок и размышлений, время общения и позитива, время наслаждения звуками природы";
    document.getElementById('myImage').src ='';
}

function myFunctionImg() {
    document.getElementById("demo").innerHTML = "";
    document.getElementById('myImage').src ='img/utro.jpg';
}

function myFunctionReset() {
    document.getElementById("demo").innerHTML = "";
    document.getElementById('myImage').src ='';
}


//function myFunctionImg() {
    //const image = document.createElement('img');      // создаем элемент img
   // image.src = 'img/utro.jpg';                  // задаём адрес изображения
   // image.alt = 'Утренние лучи сквозь деревья';     // альтернативный текст для доступности
   // document.getElementById('image').appendChild(image); // добавляем изображение в контейнер
//}