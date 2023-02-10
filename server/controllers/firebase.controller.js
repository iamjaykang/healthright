const firebase = require("../config/firebaseAdmin.config");

exports.setCustomUserClaims = async (req, res, next) => {
  try {
    // Get the user ID and custom claims from the request body
    const userId = req.body.userId;
    const customClaims = req.body.customClaims;

    // Use the Firebase Admin SDK to set the custom claims for the user
    await firebase.auth().setCustomUserClaims(userId, customClaims);

    // Return a success response to the client
    res.status(200).send({ message: "Custom claims set successfully" });
  } catch (error) {
    // Return an error response to the client
    next(error)
  }
};
