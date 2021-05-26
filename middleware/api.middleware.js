import { Op } from 'sequelize';
import HelperResponse from '../helpers/response.helpers';
import HelperToken from '../helpers/token.helpers';
import multer from 'multer';
import constants from '../core/constants';
const { userStatus, userRoles } = constants.constants;

class ApiMiddleware {
  static async checkLogin(req, res, next) {
    const token = req.header('Authorization');
    if (!token) {
      return HelperResponse.errorResponse(
        res,
        ' Account do not have permission ',
        null
      );
    }
    try {
      const verified = HelperToken.decode(token);
      const userData = await global.db.Users.findOne({
        where: {
          id: verified.id,
          status: userStatus.active
        },
      });

      if (!userData) {
        return HelperResponse.errorResponse(
          res,
          ' Account do not have permission ',
          null
        );
      }

      req.userData = userData;
      return next();
    } catch (error) {
      return HelperResponse.errorResponse(res, error.message, null);
    }
  }

  static async checkRole(req, res, next) {
    if (req.userData.role === userRoles.user) {
      return HelperResponse.errorResponse(
        res,
        ' Account do not have permission ',
        null
      );
    }
    return next();
  }

  static async checkAdmin(req, res, next) {
    if (req.userData.role !== userRoles.admin) {
      return HelperResponse.errorResponse(
        res,
        ' Account do not have permission ',
        null
      );
    }
    return next();
  }

  static uploadFile(req, res, next) {
    const upload = multer({ dest: './public/uploads/' }).single('cover');
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        return multer.MulterError;
      } else if (err) {
        // An unknown error occurred when uploading.
        return err;
      }
      // Everything went fine.
      next();
    });
  }
}

export default ApiMiddleware;
