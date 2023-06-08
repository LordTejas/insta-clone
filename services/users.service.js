const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const User = require('../models').User;
const bcrypt = require("bcryptjs");

const findAll = async () => {
    const users = await User.find({});
    if (users.length === 0) {
        return [];
    }

    return users;
};

const findById = async (pk) => {
    const user = await User.findById(pk);

    if (!user) {
        return null;
    }

    return user;
}

const findByEmail = async (email) => {
    const user = await User.findOne({ email });
    return user;
}

const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
};

const create = async (data) => {
    const {name, email, password} = data;

    const hashedPassword = await encryptPassword(password);

    const user = await User.create({name, email, password: hashedPassword});

    return user;
}

module.exports = {
  findAll,
  findById,
  findByEmail,
  create,
};
