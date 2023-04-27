function greetUser() {
    const message = "Hi my name is Brad";
    console.log(message);
}



greetUser ();





function greetUser(firstName, lastName) {
    const message = "Hi my name is " + firstName + "" + lastName;
    console.log(message);
}



greetUser ("mick", " key");

function greetUser() { 
    let messageDiv =  document.getElementById ("messageDiv");
    messageDiv.innerHTML = "Hello";
    
}