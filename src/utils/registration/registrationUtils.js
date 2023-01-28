export const validateEmail = (email) => {
    const emailPattern = new RegExp(
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/
    );
    if (!email || !emailPattern.test(email)) {
        return false;
    } else {
        return true;
    }
};

const validateName = (name) => {
    const namePattern = new RegExp(/^[a-zA-Z\s]+$/);
    if (!name || !namePattern.test(name)) {
        return false;
    } else {
        return true;
    }
};

const validatePassword = (password) => {
    const passwordPattern = new RegExp(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    );
    if (!password || !passwordPattern.test(password)) {
        return false;
    } else {
        return true;
    }
};
const validateAddress = (address) => {
    if (!address) {
        return false;
    } else {
        return true;
    }
};

const validateState = (state) => {
    let statesInIndia = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Dadra and Nagar Haveli and Daman and Diu",
        "Daman and Diu",
        "Lakshadweep",
        "Puducherry",
    ];
    statesInIndia = statesInIndia.map((state) => state.toLowerCase());
    if (!state || !statesInIndia.includes(state.toLowerCase())) {
        return false;
    } else {
        return true;
    }
};

const validatePinCode = (pinCode) => {
    const pinCodePattern = new RegExp(/[0-9]{6}/);
    if (!pinCode || !pinCodePattern.test(pinCode)) {
        return false;
    } else {
        return true;
    }
};

// validation function
export const doValidation = (id, name, value) => {
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

const applyValidClass = (id) => {
    let classList = document.getElementById(id).classList;
    if (classList.contains("invalid")) {
        classList.remove("invalid");
    }
    classList.add("valid");
};
const applyInvalidClass = (id) => {
    let classList = document.getElementById(id).classList;
    if (classList.contains("valid")) {
        classList.remove("valid");
    }
    classList.add("invalid");
};
