import HelperResponse from "../../helpers/response.helpers";
import HelperPagination from "../../helpers/pagination.helper";
import HelperUpload from "../../helpers/upload.helper";
import { constants } from "../../core/constants";
const { userStatus, userRoles } = constants;

class BookController {
  static async getAll(req, res) {
    try {
      let { limit, page } = req.query;
      const option = {
        order: [["createdAt", "DESC"]],
      };
      const optionQuery = HelperPagination.optionPagination(option, {
        limit,
        page,
      });
      console.log(optionQuery);
      const books = await global.db.Books.findAndCountAll(optionQuery);
      return HelperResponse.success(res, "", { books });
    } catch (error) {
      return HelperResponse.errorResponse(res, error.message);
    }
  }

  static async create(req, res) {
    try {
      let { title, description, author, owner, cover, category } = req.body;
      const coverUpload = HelperUpload.uploadImage(cover);
      const bookCreate = {
        title: title,
        description: description,
        author: author || owner,
        owner: owner,
        cover: coverUpload,
        category: category,
      };

      const book = await global.db.Books.create(bookCreate);
      return HelperResponse.success(res, "", { book });
    } catch (error) {
      return HelperResponse.errorResponse(res, error.message);
    }
  }

  static async edit(req, res) {
    try {
      const { body } = req;
      const { id } = req.params;
      
      if(body.role) {
        if(req.userData.role === userRoles.admin && req.userData.id === id) {
          return HelperResponse.errorResponse(res, 'Can not change role user have role Super Admin');
        }
        if(req.userData.role === userRoles.admin) {
          return HelperResponse.errorResponse(res, 'Permission denied');
        }
        userData.role = body.role;
      }

      const userData = {
        firstName: body.firstName || undefined,
        lastName: body.lastName || undefined,
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
}
export default BookController;
