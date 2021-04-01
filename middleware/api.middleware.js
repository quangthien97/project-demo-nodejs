import { Op } from 'sequelize';
import HelperResponse from '../helpers/response.helpers';
import HelperToken from '../helpers/token.helpers';
import constants from '../core/constants';
const { userStatus, adminRoles } = constants.constants;

class ApiMiddleware {
  static async checkRole(req, res, next) {
    const token = req.header('Authorization');
    if(!token) {
      return HelperResponse.errorResponse(res, ' Account do not have permission ', null);
    }
    try {
      const verified = HelperToken.decode(token);
      const userData = await global.db.Users.findOne({
        where:
        {
          id: verified.id,
          status: userStatus.verified,
          role: {
            [Op.or]: [adminRoles.admin, adminRoles.superAdmin]
          }
        }
      });
      if(!userData) {
        return HelperResponse.errorResponse(res, ' Account do not have permission ', null);
      }
      req.userData = userData;
      return next();
    } catch(error) {
      return HelperResponse.errorResponse(res, error.message, null);
    }
  }

  static async checkRoleSuperAdmin(req, res, next) {
    if(req.userData.role !== adminRoles.superAdmin) {
      return HelperResponse.errorResponse(res, ' Account do not have permission ', null);
    }
    return next();
  }
}

export default ApiMiddleware;
