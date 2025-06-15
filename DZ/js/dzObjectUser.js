function validateForm() {
    const person = {
        country:document.getElementById("country").value,
        age:document.getElementById("age").value,
        gender:document.getElementById("gender").value,
        formData: function() {
            return ` 
            <p><strong>Country:</strong> ${this.country}</p>
            <p><strong>Birth Year:</strong> ${2025 - this.age}</p>
            <p><strong>Gender:</strong> ${this.gender}</p>
            `;
        }
    };
    const validator = {
        formValidator: function() {
        if (!isNaN(person.country)) {
            alert("Поле 'Страна' не должна содержать цифры!");
            return false; 
        }
        if (isNaN(person.age)) {
            alert("Поле 'Возраст' должно содержать только цифры!");
            return false;
        }
        if (!isNaN(person.gender)) {
            alert("Поле 'Пол' не должно содержать цифры!");
            return false;
        }
            return true;
        }
    };
    if (!validator.formValidator()) return false;
    const display = {
        formDisplay: function() {
            return document.getElementById("output").innerHTML = person.formData();
        }
    };
    display.formDisplay();
    return false;
}


    