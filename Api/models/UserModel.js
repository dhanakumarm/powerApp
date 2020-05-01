
const userData = require("./mock/userTestData");

const User = function (user) {
    console.log(userData);
    exit;
};

User.getAll = function (result) {
    const data = this.responseData(userData);
    result(data);
};

User.findById = function (id, result) {
    const data = userData.find(c => c.user_id === parseInt(id));
    result(data);
};


User.create = function (data, result) {
    const user = {
        user_id: userData.length + 1,
        user_name: data.user_name,
        user_fullname: data.user_fullname,
        user_email: data.user_email,
        user_password: data.user_password,
        user_type: data.user_type,
        user_status: data.user_status,
        auth_key: data.auth_key
    };
    userData.push(user);
    result(user);
};

User.update = function (Users, data, result) {
    Users.user_name = data.user_name;
    Users.user_fullname = data.user_fullname;
    Users.user_email = data.user_email;
    Users.user_password = data.user_password;
    Users.user_type = data.user_type;
    Users.user_status = data.user_status;
    Users.auth_key = data.auth_key;
    result(Users);
};

User.delete = function(data, result){
    const data1 = userData.indexOf(data);
    userData.splice(data1,1);
    result(userData);
};


User.responseData = function (userData1) {
    let d = userData1.map(function (value) {
        return {
            id: value.user_id,
            name: value.user_name,
            email: value.user_email
        }
    });
    return d;
}

module.exports = User;