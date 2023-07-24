export default function Validation(userInput){
    const errors = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const phone_pattern = /^\d{10}$/;
    const age_pattern = /^\d{1,3}$/;
    errors.hasError = false;
    if(userInput.username===""){
        errors.username = "Name is Required field"
        errors.hasError = true;
    }

    if(userInput.email === ""){
        errors.email = "Name is Required field"
        errors.hasError = true;
    }else if(!email_pattern.test(userInput.email)){
        errors.email = "Invalid Email"
        errors.hasError = true;
    }

    if(userInput.age === ""){
        errors.age = "Age is Required Field"
        errors.hasError = true;
    }
    else if(!age_pattern.test(userInput.age)){
        errors.age = "Enter Valid Age"
        errors.hasError = true;
    }

    if(userInput.phone === ""){
        errors.phone = "Phone is Required Field"
        errors.hasError = true;
    }
    else if(!phone_pattern.test(userInput.phone)){
        errors.phone = "Enter Valid Phone Number"
        errors.hasError = true;
    }

    if(userInput.password === ""){
        errors.password = "Password is Required Field"
        errors.hasError = true;
    }
    else if(userInput.password.length< 4)
    {
        errors.password = "Password too short";
        errors.hasError = true;
    }

    return errors;
}