import HelperPassword from '../../helpers/password.helper';
import HelperResponse from '../../helpers/response.helpers';
import HelperPagination from '../../helpers/pagination.helper';
import { constants } from '../../core/constants';
const { userStatus, userRoles } = constants;

class CategoryController {
  static async getAll(req, res) {
    try {
      let { limit, page } = req.query;
      const option = {
        order: [
          ['createdAt', 'DESC']
        ]
      };
      const optionQuery = HelperPagination.optionPagination(option, {limit, page});
      const categories = await global.db.Users.findAndCountAll(optionQuery);
      return HelperResponse.success(res, '', { categories });
    } catch(error) {
      return HelperResponse.errorResponse(res, error.message);
    }
  }
}

export default CategoryController;
