const moment = require('moment')
moment.locale('ru');
const dateFormatForMoment = 'Do MMMM YYYY, HH:mm:ss';

exports.newUserConstructor = (password, email) => {
    const newUserObject = {
        registrationDate: moment().format(dateFormatForMoment),
        email: email,
        password: password,
        admin: false,
        lessons:{
            evenWeek: [],
            unevenWeek: []
        },
        lastLoginDate: moment().format(dateFormatForMoment)
    };
    return newUserObject;
}
