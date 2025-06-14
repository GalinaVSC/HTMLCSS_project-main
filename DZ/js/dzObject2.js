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
        },
        formValidator: function() { 
            if (typeof this.firstName !== "string" || !isNaN(this.firstName)) {
                alert("First Name cannot contain numbers!");
                return false; 
            }
            if (typeof this.lastName !== "string" || !isNaN(this.lastName)) {
                alert("Last Name cannot contain numbers!");
                return false;
            }
            if (typeof this.email !== "string" || !this.email.includes("@")) {
                alert("Enter valid email!");
                return false;
            }
            return true;
        }
        };
        //if (!person.formValidator()) {
        //        return false;
        //    }   
        person.formValidator();
        document.getElementById("output").innerHTML = person.formData();
        return false;    
}


    