import HelperResponse from '../../helpers/response.helpers';
import HelperPagination from '../../helpers/pagination.helper';

class CategoryController {
  static async getAll(req, res) {
    try {
      let { limit, page } = req.query;
      const option = {
        order: [['createdAt', 'DESC']],
      };
      const optionQuery = HelperPagination.optionPagination(option, {
        limit,
        page,
      });
      const categories = await global.db.Categories.findAndCountAll({
        ...optionQuery,
        include: {
          model: global.db.Books,
          as: 'Category_Book',
          include: [
            {
              model: global.db.Users,
              as: 'Author_Book',
            },
            {
              model: global.db.Users,
              as: 'Owner_Book',
            },
          ],
        },
      });
      return HelperResponse.success(res, '', { categories });
    } catch (error) {
      return HelperResponse.errorResponse(res, error.message);
    }
  }

  static async create(req, res) {
    try {
      const { body } = req;
      const category = await global.db.Categories.create({
        title: body.title,
      });
      return HelperResponse.success(res, '', { category });
    } catch (error) {
      return HelperResponse.errorResponse(res, error.message);
    }
  }
}

export default CategoryController;
