exports.newUserConstructor = (password, email) => {
    const newUserObject = {
        registrationDate: new Date(),
        email: email,
        password: password
    }
    return newUserObject;
}
