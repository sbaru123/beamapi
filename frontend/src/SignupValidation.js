function validation(values) {
    let error = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pwdPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (values.name === "") {
        error.name = "Name should not be empty";
    }

    if (values.email === "") {
        error.email = "Email should not be empty";
    } else if (!emailPattern.test(values.email)) {
        error.email = "Email format is invalid";
    }

    if (values.password === "") {
        error.password = "Password should not be empty";
    } else if (!pwdPattern.test(values.password)) {
        error.password = "Password should be at least 8 characters long and contain at least one number, one lowercase and one uppercase letter";
    }

    return error;
}

export default validation;
