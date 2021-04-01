import HelperResponse from '../../helpers/response.helpers';
import HelperToken from '../../helpers/token.helpers';
import HelperPassword from '../../helpers/password.helper';

class AuthController {
  static async logIn(req, res) {
    try {
      const user = await global.db.Users.findOne({where: { email: req.body.email }});
      if(!user) {
        return HelperResponse.errorResponse(res, 'Wrong Email');
      }
      const result = await HelperPassword.compare(req.body.password, user.password);
      if(result) {
        const token = HelperToken.encode(user.id);
        await global.db.Users.update({ lastLoginAt: new Date() }, { where: { id: user.id } });
        const data = { user, token };
        return HelperResponse.success(res, 'login successful', data);
      } else {
        return HelperResponse.errorResponse(res, 'Wrong password');
      }
    } catch(error) {
      return HelperResponse.errorResponse(res, error.message);
    }
  }

  static async logOut(req, res, next) {
  }
}


export default AuthController;

