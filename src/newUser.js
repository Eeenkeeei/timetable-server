exports.newUserConstructor = (password, email) => {
    const newUserObject = {
        email: email, password: password
    }
    return newUserObject;
}
