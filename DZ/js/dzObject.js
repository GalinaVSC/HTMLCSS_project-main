function validateForm() {
    const person = {
        firstName:document.getElementById("firstname").value,
        lastName:document.getElementById("lastname").value,
        email:document.getElementById("email").value,
        formData: function() {
            return `
            <p><strong>First Name:</strong> ${this.firstName}</p>
            <p><strong>Last Name:</strong> ${this.lastName}</p>
            <p><strong>Email:</strong> ${this.email}</p>
            `;
        }
    };
        person.formValidator = function() { 
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
            return true;
        };
        if (!person.formValidator()) {
                return false;
            }       
        document.getElementById("output").innerHTML = person.formData();
        return false;    
}


    