//this is the main function 
function checkForm() {
    //the below variables is collecting user inputs 
    firstname = document.getElementById("firstname").value;
    surname = document.getElementById("surname").value;
    email = document.getElementById("email").value;
    email2 = document.getElementById("email2").value;
    phone = document.getElementById("phone").value;
    age = document.getElementById("age").value;
    student = document.getElementById("stuyes").checked;
    employment = document.getElementById("empyes").checked;

    //calls another function checkPhone
    phonePhone = checkPhone(phone);

    //calls another function checkEmail
    emailResult = checkEmail(email);

    //call another function to check for errors such as if any field is empty
    if (isFormValid()) {

        // after the user successsfully fills the form, this will tell the user that all validation is now complete
        alert("First Name: " + firstname + "\n Surname: " + surname + "\n Email: " + email + "\n Confirm email: " + email2 + "\n Phone Number: " + phone + "\n Age: " + age + "\n Student Status: " + student + "\n Employment Status: " + employment);
        return true;
    }
    else {
        return false;
    }
}

//the function below is checking for empty inputs and displaying error 
function isFormValid() {

    var isvalid = true;

    if (firstname == "") {
        document.getElementById("firstnameError").style.display = "inline";
        firstnameValid = false;
        isvalid = false;
    }
    else {
        document.getElementById("firstnameError").style.display = "none";
        isvalid = true;
        firstnameValid = true;
    }

    if (surname == "") {
        document.getElementById("surnameError").style.display = "inline";
        surnameValid = false;
        isvalid = false;
    }
    else {
        document.getElementById("surnameError").style.display = "none";
        surnameValid = true;
        isvalid = true;
    }

    if (email == "") {
        document.getElementById("emailError").style.display = "inline";
        emailValid = false;
        isvalid = false;
    }
    else if (!emailResult) {
        document.getElementById("emailError").style.display = "inline";
        emailValid = false;
        isvalid = false;
    }
    else {
        document.getElementById("emailError").style.display = "none";
        emailValid = true;
        isvalid = true;
    }

    if (email2 == "") {
        document.getElementById("email2Error").style.display = "inline";
        email2Valid = false;
        isvalid = false;
    }
    else if (email != email2) {
        document.getElementById("email2Error").style.display = "inline";
        document.getElementById("email2").select();
        email2Valid = false;
        isvalid = false;
    }
    else {
        document.getElementById("email2Error").style.display = "none";
        email2Valid = true;
    }

    if (phone == "") {
        document.getElementById("phoneError").style.display = "inline";
        document.getElementById("phone").select();
        phoneValid = false;
        isvalid = false;
    }
    else if (!phonePhone) {
        document.getElementById("phoneError").style.display = "inline";
       
        phoneValid = false;
        isvalid = false;
    }
    else {
        document.getElementById("phoneError").style.display = "none";
        phoneValid = true;
        isvalid = true;
    }

    if (age == "") {

        document.getElementById("ageError").style.display = "inline";
     
        ageValid = false;
        isvalid = false;
    }
        // checks if age is between 16 and 90
    else if (age < 16 || age > 90) {

        document.getElementById("ageError").style.display = "inline";
        ageValid = false;
        isvalid = false;
    }
    else {
        document.getElementById("ageError").style.display = "none";
        ageValid = true;
        isvalid = true;
    }


    if (!firstnameValid) {
        document.getElementById("firstname").focus();
    }
    else if (!surnameValid) {
        document.getElementById("surname").focus();
    }
    else if (!emailValid) {
        document.getElementById("email").focus();
    }
    else if (!email2Valid) {
        document.getElementById("email2").focus();
    }
    else if (!phoneValid) {
        document.getElementById("phone").focus();
    }
    else if (!ageValid) {
        document.getElementById("age").focus();
    }
    return isvalid;
}


//checks if phone number is in proper format
function checkPhone(value) {
    var phoneno = /^(\+?\(61\)|\(\+?61\)|\+?61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){7,9}$/;
    if (phoneno.test(value)) {
        return true;
    } else {
        return false;
    }
}

//checks if email is in proper email format
function checkEmail(inputvalue) {
    var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    if (pattern.test(inputvalue)) {
        return true;
    } else {
        return false;
    }
}

//checks if confirm email address matches with email address
function validateEmail(email, email2) {
    if (email.value != email2.value || email.value == '' || email2.value == '') {
        email2.setCustomValidity('email incorrect');
    } else {
        email2.setCustomValidity('');
    }
}

//Age range slider

function rangeSlider(value) {
    document.getElementById('rangeValue').innerHTML = value;
    changePrice();
}


// for changing price

function changePrice() {

    //  This is the membership price for one month 

    var price = 10;

    // variables for customer's student status, employment status and age are declaring over here

    student = document.getElementById("stuyes").checked;

    age = document.getElementById("age").value;

    employment = document.getElementById("empno").checked;


    // if the customer is between 16 to 20 years old, a 10% discount is given 
    if (age >= 16 && age <= 20) {

        //First the discount is calculated by dividing the percentage by 100 and then it multiplies by the original price
        discount = (10 / 100) * price;

        //After discount is calculated, the discounted price will be subtracted by the orginal price
        price = price - discount;

        //After discount is calculated, the price will round to 2 decimal places
        price = Math.round(price * 100) / 100;

    }

    // if the customer is a student, 5% discount is given
    if (document.getElementById('stuyes').checked) {

        //First the discount is calculated by dividing the percentage by 100 and then it multiplies by the original price
        discount = (5 / 100) * price;

        //After discount is calculated, the discounted price will be subtracted by the orginal price
        price = price - discount;

        //After discount is calculated, the price will round to 2 decimal places
        price = Math.round(price * 100) / 100;
    }

    // if the customer if umemployed, 40% discount is given
    if (document.getElementById('empno').checked) {

        //First the discount is calculated by dividing the percentage by 100 and then it multiplies by the original price
        discount = (40 / 100) * price;

        //After discount is calculated, the discounted price will be subtracted by the orginal price
        price = price - discount;
        
        //After discount is calculated, the price will round to 2 decimal places
        price = Math.round(price * 100) / 100;
    }


    document.getElementById('price').innerHTML = price;

}
