const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  updateUserById,
} = require("../services/user.service");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.status(200).send({
      data: users,
      success: true,
      message: "Retreived users successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    res.status(200).send({
      data: user,
      success: true,
      message: "Retreived user successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.createNewUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    const createdUser = await createUser(newUser);
    res.status(201).send({
      data: createdUser,
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.updateExistingUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newUserData = req.body;
    const updatedUser = await updateUserById(id, newUserData);
    res
      .status(200)
      .send({
        data: updatedUser,
        success: true,
        message: "User updated successfully",
      });
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteUser(id);
    res
      .status(204)
      .send({ success: true, message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};
