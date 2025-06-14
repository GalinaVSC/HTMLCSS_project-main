function validateForm() {
    const person = {
        firstName:document.getElementById("firstname").value,
        lastName:document.getElementById("lastname").value,
        email:document.getElementById("email").value,
        formData: function() {
            //получение данных
            return ` 
            <p><strong>First Name:</strong> ${this.firstName}</p>
            <p><strong>Last Name:</strong> ${this.lastName}</p>
            <p><strong>Email:</strong> ${this.email}</p>
            `;
        }
    };
    const validator = {
        formValidator: function() {
        if (!isNaN(person.firstName)) {
            alert("First Name cannot contain numbers!");
            return false; 
        }
        if (!isNaN(person.lastName)) {
            alert("Last Name cannot contain numbers!");
            return false;
        }
        if (!person.email.includes("@")) {
            alert("Enter valid email!");
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


    