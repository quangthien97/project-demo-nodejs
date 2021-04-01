import HelperPassword from '../../helpers/password.helper';
import HelperResponse from '../../helpers/response.helpers';
import HelperPagination from '../../helpers/pagination.helper';
import { constants } from '../../core/constants';
const { userStatus, adminRoles } = constants;

class UserController {
  static async getAll(req, res) {
    try {
      let { limit, page } = req.query;
      const option = {
        order: [
          ['createdAt', 'DESC']
        ]
      };
      const optionQuery = HelperPagination.optionPagination(option, {limit, page});
      console.log(optionQuery);
      const usersData = await global.db.Users.findAndCountAll(optionQuery);
      return HelperResponse.success(res, '', { usersData });
    } catch(error) {
      return HelperResponse.errorResponse(res, error.message);
    }
  }

  static async getDetail(req, res) {
    try {
      const { id } = req.params;
      const userDetail = await global.db.Users.findOne({
        where: { id }
      });
      return HelperResponse.success(res, '', { userDetail });
    } catch(error) {
      return HelperResponse.errorResponse(res, error.message);
    }
  }

  static async create(req, res) {
    try {
      const { body } = req;
      const userData = {
        name: body.name,
        email: body.email,
        lastLoginAt: new Date(),
        password: await HelperPassword.hash(body.password)
      };
      if(body.role) {
        userData.role = body.role;
      }
      const checkUniqueUser = await global.db.Users.findOne({ where: { email: userData.email } });
      if(checkUniqueUser) {
        return HelperResponse.errorResponse(res, 'Email is Unique');
      }
      const user = await global.db.Users.create(userData);
      return HelperResponse.success(res, '', { user });
    } catch(error) {
      return HelperResponse.errorResponse(res, error.message);
    }
  }

  static async edit(req, res) {
    try {
      const { body } = req;
      const { id } = req.params;
      
      if(body.role) {
        if(req.userData.role === adminRoles.superAdmin && req.userData.id === id) {
          return HelperResponse.errorResponse(res, 'Can not change role user have role Super Admin');
        }
        if(req.userData.role === adminRoles.admin && body.role === adminRoles.superAdmin) {
          return HelperResponse.errorResponse(res, 'Permission denied');
        }
        userData.role = body.role;
      }

      const userData = {
        name: body.name
      };
      if(body.password) {
        userData.password = await HelperPassword.hash(body.password);
      }

      const user = await global.db.Users.update(
        userData, { where: { id } }
      );
      return HelperResponse.success(res, '', { user });
    } catch(error) {
      return HelperResponse.errorResponse(res, error.message);
    }
  }

  static async active(req, res) {
    try {
      const { id } = req.params;
      const user = await UserController.updateStatus(id, userStatus.verified);
      return HelperResponse.success(res, '', user);
    } catch(error) {
      return HelperResponse.errorResponse(res, error.message);
    }
  }

  static async inactive(req, res) {
    try {
      const { id } = req.params;
      const user = await UserController.updateStatus(id, userStatus.inactive);
      return HelperResponse.success(res, '', { user });
    } catch(error) {
      return HelperResponse.errorResponse(res, error.message);
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      if(req.userData.id === id) {
        return HelperResponse.errorResponse(res, 'Can not delete your self');
      }
      const userDetail = await global.db.Users.findOne({
        where: { id }
      });
      if(userDetail.role === adminRoles.superAdmin) {
        return HelperResponse.errorResponse(res, 'Can not delete Super Admin Role');
      }
      const user = await global.db.Users.update(
        { status: userStatus.deleted, deleteAt: new Date() }, { where: { id } }
      );
      return HelperResponse.success(res, '', { user });
    } catch(error) {
      return HelperResponse.errorResponse(res, error.message);
    }
  }

  static async updateStatus(id, status) {
    return global.db.Users.update(
      {
        status
      }, {
        where: { id }
      }
    );
  }
}

export default UserController;
