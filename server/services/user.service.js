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
const ShopOrder = db.shopOrders;

exports.getAllUsers = async () => {
  try {
    const users = await User.findAll({
      ...userDetails(UserAddress, Address, Country, ShopOrder),
    });
    if (!users) throw new NotFoundError("Failed to retrieve users");
    return users;
  } catch (error) {
    throw new InternalServerError(error.message);
  }
};

exports.getUserById = async (customerId) => {
  try {
    const user = await User.findByPk(customerId, {
      ...userDetails(UserAddress, Address, Country, ShopOrder),
    });
    if (!user) throw new NotFoundError(`User with id ${customerId} not found`);
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
    await UserAddress.create(userAddressData);

    return await User.findByPk(user.id, {
      ...userDetails(UserAddress, Address, Country),
    });
  } catch (error) {
    throw error;
  }
};

exports.updateUserById = async (id, newUserData) => {
  try {
    const user = await User.findByPk(id, {
      include: [
        {
          model: UserAddress,
          include: [{ model: Address, include: [{ model: Country }] }],
        },
      ],
    });

    if (!user) {
      throw new NotFoundError(`User with the id not found`);
    }

    const {
      firstName,
      lastName,
      emailAddress,
      isDefault,
      unitNumber,
      streetNumber,
      addressLine1,
      addressLine2,
      city,
      region,
      postalCode,
      countryName,
    } = newUserData;

    // Update the user's properties with the new data or keep the old data
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.emailAddress = emailAddress || user.emailAddress;

    let address = null;
    if (user.userAddresses.length > 0) {
      address = user.userAddresses[0].address;
    } else {
      // if the user does not have an associated address, create a new one
      address = await Address.create({
        unitNumber,
        streetNumber,
        addressLine1,
        addressLine2,
        city,
        region,
        postalCode,
      });
      user.addAddress(address);
    }

    // Update the address's properties with the new data or keep the old data
    address.unitNumber = unitNumber || address.unitNumber;
    address.streetNumber = streetNumber || address.streetNumber;
    address.addressLine1 = addressLine1 || address.addressLine1;
    address.addressLine2 = addressLine2 || address.addressLine2;
    address.city = city || address.city;
    address.region = region || address.region;
    address.postalCode = postalCode || address.postalCode;

    let country = null;
    if (countryName) {
      country = await Country.findOne({
        where: { countryName },
      });
      if (!country) {
        country = await Country.create({ countryName });
      }
      address.setCountry(country);
    }

    // update the junction table
    if (isDefault === true) {
      await UserAddress.update(
        { isDefault: false },
        { where: { userId: user.id } }
      );
      await UserAddress.update(
        { isDefault: true },
        { where: { userId: user.id, addressId: address.id } }
      );
    }

    // Save the updated user and address
    await user.save();
    await address.save();

    return await User.findByPk(user.id, {
      ...userDetails(UserAddress, Address, Country),
    });
  } catch (error) {
    throw error;
  }
};

exports.deleteUser = async (id) => {
  try {
    const user = await User.findByPk(id, {
      include: [
        {
          model: UserAddress,
          include: [{ model: Address }],
        },
      ],
    });

    if (!user) {
      throw new NotFoundError(`User with the id not found`);
    }

    // Delete the associated addresses and user addresses
    await Promise.all(
      user.userAddresses.map(async (userAddress) => {
        await userAddress.destroy();
        await userAddress.address.destroy();
      })
    );

    // Delete the user
    await user.destroy();
  } catch (error) {
    throw error;
  }
};
