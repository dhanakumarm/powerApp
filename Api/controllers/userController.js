const Users = require("../models/UserModel.js");
const Joi = require('@hapi/joi');

exports.findAll = (req, res) => {
    Users.getAll((data) => {
        res.send(data)
    });
};

exports.findOne = (req, res) => {
    Users.findById(req.params.id, (data) => {
        if (!data) res.status(404).send("The user with the given id was not found");
        res.send(data)
    });
};

exports.create = (req, res) => {
    const { error } = validateUsers(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    Users.create(req.body, (data) => {
        res.send(data);
    });
};

exports.update = (req, res) => {
    const user = Users.findById(req.params.id, (data) => {
        if (!data) return res.status(404).send("The user with the given id was not found");

        const { error } = validateUsers(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        Users.update(data, req.body, (update_data) => {
            res.send(update_data);
        });
    });
};

exports.delete = (req, res) => {
    const user = Users.findById(req.params.id, (data) => {
        if (!data) return res.status(404).send("The user with the given id was not found");

        Users.delete(data, (alldata) => {
            res.send(alldata);
        });
    });
};

function validateUsers(user) {
    const schema = Joi.object().keys({
        user_name: Joi.string().min(3).required(),
        user_fullname: Joi.string(),
        user_email: [Joi.string(), Joi.number()],
        user_password: Joi.string(),
        user_type: Joi.string(),
        user_status: Joi.string(),
        auth_key: Joi.string(),
    });
    const result = schema.validate(user);
    return result;
}