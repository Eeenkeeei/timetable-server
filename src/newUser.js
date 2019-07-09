exports.newUserConstructor = (password, email) => {
    const date = new Date()
    const newUserObject = {
        registrationDate: new Date(),
        email: email,
        password: password,
        admin: false,
        lastLoginDate: new Date()
    };
    return newUserObject;
}
