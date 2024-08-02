function validation(values) {
    let errors = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pwdPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!values.email) {
        errors.email = "Email should not be empty";
    } else if (!emailPattern.test(values.email)) {
        errors.email = "Email format is invalid";
    }

    if (!values.password) {
        errors.password = "Password should not be empty";
    } else if (!pwdPattern.test(values.password)) {
        errors.password = "Password must be at least 8 characters long and contain at least one number, one lowercase letter, and one uppercase letter";
    }

    return errors;
}

export default validation;
