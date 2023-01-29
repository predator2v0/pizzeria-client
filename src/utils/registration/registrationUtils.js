import {validateEmail, validateName, validatePassword, validateAddress, validateState, validatePinCode, applyInvalidClass, applyValidClass} from '../formValidations/validation';

// validation function
export const doRegistrationValidation = (id, name, value) => {
    let isValid = false;
    switch (name) {
        case "emailId":
            isValid = validateEmail(value);
            isValid ? applyValidClass(id) : applyInvalidClass(id);
            break;
        case "name":
            isValid = validateName(value);
            isValid ? applyValidClass(id) : applyInvalidClass(id);
            break;
        case "pass":
            isValid = validatePassword(value);
            isValid ? applyValidClass(id) : applyInvalidClass(id);
            break;
        case "cpass":
            isValid = validatePassword(value);
            isValid ? applyValidClass(id) : applyInvalidClass(id);
            break;
        case "address":
            isValid = validateAddress(value);
            isValid ? applyValidClass(id) : applyInvalidClass(id);
            break;
        case "state":
            isValid = validateState(value);
            isValid ? applyValidClass(id) : applyInvalidClass(id);
            break;
        case "pincode":
            isValid = validatePinCode(value);
            isValid ? applyValidClass(id) : applyInvalidClass(id);
            break;
        default:
            return "invalid field!";
    }
};

export const allValid = (userData) => {
    const { emailId, name, pass, cpass, address, state, pincode } = userData;
    if (
        validateEmail(emailId) &&
        validateName(name) &&
        validatePassword(pass) &&
        validatePassword(cpass) &&
        validateAddress(address) &&
        validateState(state) &&
        validatePinCode(pincode)
    ) {
        return true;
    }
    return false;
};
