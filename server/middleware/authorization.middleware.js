const firebase = require("../config/firebaseAdmin.config");
const { UnauthorizedError, ForbiddenError } = require("../helpers/error.helper");


const checkAuthorization = async (req, res, next) => {
    try {
      // Verify the user's token
      const idToken = req.headers.authorization.split("Bearer ")[1];
      const decodedToken = await firebase.auth().verifyIdToken(idToken);
      if (!decodedToken) {
        throw new UnauthorizedError("Unauthorized: Invalid token");
      }
  
      // Check if the user is an admin or the right user
      const { id } = req.params;
      if (!decodedToken.admin && decodedToken.uid !== id) {
        throw new ForbiddenError("ForbiddenError: User is not authorized");
      }
  
      next();
    } catch (error) {
      next(error);
    }
  };

  module.exports = checkAuthorization;
