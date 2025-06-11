function validateForm() {
    const person = {};
        person.firstName=document.getElementById("firstname").value;
        person.lastName=document.getElementById("lastname").value;
        person.email=document.getElementById("email").value;
       
        if (typeof person.firstName !== "string" || !isNaN(person.firstName)) {
           alert("First Name cannot contain numbers!");
           return false; 
        }
        if (typeof person.lastName !== "string" || !isNaN(person.lastName)) {
            alert("Last Name cannot contain numbers!");
            return false;
        }
        if (typeof person.email !== "string" || !person.email.includes("@")) {
            alert("Enter valid email!");
            return false;
        }
       
        document.getElementById("output").innerHTML = `
        <p><strong>First Name:</strong> ${person.firstName}</p>
        <p><strong>Last Name:</strong> ${person.lastName}</p>
        <p><strong>Email:</strong> ${person.email}</p>
        `;

        return false; // Prevent actual form submission Предотвратить фактическую отправку формы
    }