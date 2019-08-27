const moment = require('moment')
moment.locale('ru');
const dateFormatForMoment = 'Do MMMM YYYY, HH:mm:ss';
const uuidv4 = require('uuid/v4');

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
        lastLoginDate: moment().format(dateFormatForMoment),
        lessonTasks: [],
        teachers: [],
        lessonTime: [
            {id: uuidv4(), lessonNumber: 1, lessonStartTime: '8:00', lessonFinishTime: '9:30'},
            {id: uuidv4(), lessonNumber: 2, lessonStartTime: '9:40', lessonFinishTime: '11:10'},
            {id: uuidv4(), lessonNumber: 3, lessonStartTime: '11:20', lessonFinishTime: '12:50'},
            {id: uuidv4(), lessonNumber: 4, lessonStartTime: '13:30', lessonFinishTime: '15:00'},
            {id: uuidv4(), lessonNumber: 5, lessonStartTime: '15:10', lessonFinishTime: '16:40'},
            {id: uuidv4(), lessonNumber: 6, lessonStartTime: '16:50', lessonFinishTime: '18:10'},
        ]
    };
    return newUserObject;
}
