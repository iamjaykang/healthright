const { userDetails } = require("../config/constants.config");
const {
  InternalServerError,
  BadRequestError,
  NotFoundError,
} = require("../helpers/error.helper");
const db = require("../models");
const User = db.users;
const UserAddress = db.userAddresses;
const Country = db.countries;
const Address = db.addresses;

exports.getAllUsers = async () => {
  try {
    const users = await User.findAll({
      ...userDetails(UserAddress, Address, Country),
    });
    if (!users) throw new NotFoundError("Failed to retrieve users");
    return users;
  } catch (error) {
    throw new InternalServerError(error.message);
  }
};

exports.getUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (!user) throw new NotFoundError(`User with id ${id} not found`);
    return user;
  } catch (error) {
    throw new InternalServerError(error.message);
  }
};

exports.createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      throw new BadRequestError("Email already exists");
    }
    throw new InternalServerError(error.message);
  }
};

exports.updateUser = async (id, updateData) => {
  try {
    const [updatedRowsCount, updatedRows] = await User.update(updateData, {
      where: { id },
      returning: true,
    });
    if (!updatedRowsCount)
      throw new NotFoundError(`User with id ${id} not found`);
    return updatedRows[0];
  } catch (error) {
    throw new InternalServerError(error.message);
  }
};

exports.deleteUser = async (id) => {
  try {
    const deletedRowsCount = await User.destroy({ where: { id } });
    if (!deletedRowsCount)
      throw new NotFoundError(`User with id ${id} not found`);
    return deletedRowsCount;
  } catch (error) {
    throw new InternalServerError(error.message);
  }
};
