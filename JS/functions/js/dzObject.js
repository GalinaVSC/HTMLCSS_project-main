function validateForm() {
    const person = {
        firstName:document.getElementById("firstname").value,
        lastName:document.getElementById("lastname").value,
        email:document.getElementById("email").value
       };
        if (typeof firstName !== "string" || !isNaN(firstName)) {
           alert("First Name cannot contain numbers!");
           return false; 
        }
        if (typeof lastName !== "string" || !isNaN(lastName)) {
            alert("Last Name cannot contain numbers!");
            return false;
        }
        if (typeof email !== "string" || !email.includes("@")) {
            alert("Enter valid email!");
            return false;
        }
       
        document.getElementById("output").innerHTML = 
        "<p><strong>First Name:</strong></p>" +
        "<p><strong>Last Name:</strong></p>"  +
        "<p><strong>Email:</strong></p>";

        return false; // Prevent actual form submission Предотвратить фактическую отправку формы
    }