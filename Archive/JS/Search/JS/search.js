function Search() { // Функция для фильтрации списка при вводе текста
    var input, filter, ul, li, a, i; // Объявление переменных
    input = document.getElementById("mySearch"); // Получение элемента поля ввода
    filter = input.value.toUpperCase(); // Преобразование введенного текста в верхний регистр
    ul = document.getElementById("myMenu"); // Получение списка категорий
    li = ul.getElementsByTagName("li"); // Получение всех элементов списка
    for (i = 0; i < li.length; i++) { // Цикл для проверки каждого элемента списка
        a = li[i].getElementsByTagName("a")[0]; // Получение ссылки внутри элемента списка
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) { // Проверка наличия введенного текста в ссылке
            li[i].style.display = ""; // Показываем подходящие элементы
        } 
            else {
                li[i].style.display = "none"; // Скрываем неподходящие элементы
            }
    }
}