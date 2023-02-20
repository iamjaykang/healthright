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
  const {
    emailAddress,
    firstName,
    lastName,
    isDefault,
    unitNumber,
    streetNumber,
    addressLine1,
    addressLine2,
    city,
    region,
    postalCode,
    countryName,
  } = userData;

  try {
    // Check if user with same email address already exists
    const existingUser = await User.findOne({ where: { emailAddress } });
    if (existingUser) {
      throw new BadRequestError("User with same email address already exists.");
    }

    // Find the country record
    const country = await Country.findOne({ where: { countryName } });
    if (!country) {
      throw new NotFoundError(`Country '${countryName}' does not exist.`);
    }

    // Create the address record
    const addressData = {
      unitNumber,
      streetNumber,
      addressLine1,
      addressLine2,
      city,
      region,
      postalCode,
      countryId: country.id,
    };
    const address = await Address.create(addressData);

    // Create the user record
    const userDataWithAddressId = {
      emailAddress,
      firstName,
      lastName,
      addressId: address.id,
    };
    const user = await User.create(userDataWithAddressId);

    // Create the userAddress record
    const userAddressData = {
      userId: user.id,
      addressId: address.id,
      isDefault,
    };
    const userAddress = await UserAddress.create(userAddressData);

    // Return success message
    return {
      user: {
        id: user.id,
        emailAddress: user.emailAddress,
        firstName: user.firstName,
        lastName: user.lastName,
        address: {
          id: address.id,
          unitNumber: address.unitNumber,
          streetNumber: address.streetNumber,
          addressLine1: address.addressLine1,
          addressLine2: address.addressLine2,
          city: address.city,
          region: address.region,
          postalCode: address.postalCode,
          country: {
            id: country.id,
            name: country.countryName,
          },
        },
        isDefault: userAddress.isDefault,
      },
    };
  } catch (error) {
    throw error;
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
