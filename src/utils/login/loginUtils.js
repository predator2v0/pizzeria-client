import {applyInvalidClass, applyValidClass, validateEmail, validatePassword} from '../formValidations/validation';

export const doLoginValidation = (id, name, value) => {
    let isValid = false;
    switch (name) {
        case "emailId":
            isValid = validateEmail(value);
            isValid && value ? applyValidClass(id) : applyInvalidClass(id);
            break;
        case "password":
            isValid = validatePassword(value);
            isValid && value ? applyValidClass(id) : applyInvalidClass(id);
            break;
        default:
            return "invalid field!";
    }
};

export const allValid = (userData) => {
    const {emailId, password} = userData;
    if(validateEmail(emailId) && validateEmail(password)){
        return true;
    }
    return false;
}