const body = document.body;
const button = document.getElementById("themeButton");
const text = document.getElementById("texy=t");
button.addEventListener("click", () => {    
    if (body.classList.contains("night")) { /*это проверяет есть ли класс night в элементе body*/
        body.classList.remove("night");
        button.textContent = "Toggle Day/Night";
    }
    else {
        body.classList.add("night"); /*добавляет night класс*/
        button.textContent = "Back to Day Mode"; /*Меняем надпись на кнопке*/
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const style = document.createElement("style"); /*тут мы создаем новый элемент style*/
    style.textContent = `
        body.night {
            background-color: black;
            color: white;
    }
    `;
    document.head.appendChild(style); /*добавляем этот стиль в head документа*/
});