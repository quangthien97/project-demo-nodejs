import bcrypt from 'bcrypt';

class HelpsPassword {
  static async compare(bodyPassword, userPassword) {
    return await bcrypt.compare(bodyPassword, userPassword);
  }

  static async hash(requestPassword) {
    return await bcrypt.hash(requestPassword, 8);
  }
}

export default HelpsPassword;
