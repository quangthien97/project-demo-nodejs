import HelperResponse from '../../helpers/response.helpers';
import HelperPagination from '../../helpers/pagination.helper';
import fs from 'fs';
import { Op } from 'sequelize';
import { constants } from '../../core/constants';
const { userRoles } = constants;

class BookController {
  static async getAll(req, res) {
    try {
      let { limit, page } = req.query;

      const option = {
        include: [
          {
            model: global.db.Users,
            as: 'Author_Book',
          },
          {
            model: global.db.Users,
            as: 'Owner_Book',
          },
          {
            model: global.db.Categories,
            as: 'Category_Book',
          },
        ],
        order: [['createdAt', 'DESC']],
      };
      const optionQuery = HelperPagination.optionPagination(option, {
        limit,
        page,
      });
      const books = await global.db.Books.findAndCountAll({
        ...optionQuery,
      });
      return HelperResponse.success(res, '', { books });
    } catch (error) {
      return HelperResponse.errorResponse(res, error.message);
    }
  }

  static getDetail(req, res) {
    try {
      const { id } = req.params;
      const bookDetail = global.db.Books.findOne({
        where: {
          [Op.not]: [{ deleted: true }],
          id,
        },
        include: [
          {
            model: global.db.Users,
            as: 'Author_Book',
          },
          {
            model: global.db.Users,
            as: 'Owner_Book',
          },
          {
            model: global.db.Categories,
            as: 'Category_Book',
          },
        ],
      });
      return HelperResponse.success(res, '', { bookDetail });
    } catch (error) {
      return HelperResponse.errorResponse(res, error.message);
    }
  }

  static async search(req, res) {
    try {
      let { limit, page } = req.query;
      const searchQuery = {};

      for(const data in req.query) {
        if(data === 'limit' || data === 'page') {
          continue;
        }
        if(req.query[data]) {
          searchQuery[data] = req.query[data];
        }
      }
      const option = {
        where: {
          ...searchQuery, [Op.not]: [{ deleted: true }],
        },
        include: [
          {
            model: global.db.Users,
            as: 'Author_Book',
          },
          {
            model: global.db.Users,
            as: 'Owner_Book',
          },
          {
            model: global.db.Categories,
            as: 'Category_Book',
          },
        ],
        order: [['createdAt', 'DESC']],
      };
      const optionQuery = HelperPagination.optionPagination(option, {
        limit,
        page,
      });
      const books = await global.db.Books.findAndCountAll({
        ...optionQuery,
      });
      return HelperResponse.success(res, '', { books });
    } catch (error) {
      return HelperResponse.errorResponse(res, error.message);
    }
  }

  static async create(req, res) {
    try {
      let { title, description, author, category } = req.body;
      const { file, userData } = req;
      if (!file)
        return HelperResponse.errorResponse(res, 'Can not upload file');
      const typeOfFile = file.originalname.split('.').pop();
      fs.renameSync(
        `./public/uploads/${file.filename}`,
        `./public/uploads/${file.filename}.${typeOfFile}`
      );
      const bookCreate = {
        title,
        description,
        author: author || userData.id,
        owner: userData.id,
        cover: `${file.filename}.${typeOfFile}`,
        category,
      };

      const book = await global.db.Books.create(bookCreate);

      return HelperResponse.success(res, '', { book });
    } catch (error) {
      return HelperResponse.errorResponse(res, error.message);
    }
  }

  static async edit(req, res) {
    try {
      let { title, description, author, owner, category } = req.body;
      const { file, userData } = req;
      const { id } = req.params;

      const getBook = global.db.Books.findOne({ id });

      if (
        userData.role === userRoles.contributor &&
        (userRoles.id === getBook.owner || userRoles.id === getBook.author)
      ) {
        return HelperResponse.errorResponse(
          res,
          ' Account do not have permission ',
          null
        );
      }

      if (file) {
        fs.renameSync(
          `./public/uploads/${file.filename}`,
          `./public/uploads/${file.filename}.${typeOfFile}`
        );
      }
      const typeOfFile = file.originalname.split('.').pop();
      const bookCreate = {
        title: title || undefined,
        description: description || undefined,
        author: author || undefined,
        owner: owner || undefined,
        cover: file ? `${file.filename}.${typeOfFile}` : undefined,
        category,
      };

      const editBook = await global.db.Books.update(bookCreate, {
        where: { id },
      });

      return HelperResponse.success(res, '', { editBook });
    } catch (error) {
      return HelperResponse.errorResponse(res, error.message);
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const bookDelete = await global.db.Books.update(
        { deleted: true },
        { where: { id } }
      );
      return HelperResponse.success(res, '', { bookDelete });
    } catch (error) {
      return HelperResponse.errorResponse(res, error.message);
    }
  }
}
export default BookController;
