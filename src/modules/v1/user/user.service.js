import UserModel from "./user.model";

class UserService {
  static instance = null;

  constructor() {
    if (!UserService.instance) {
      UserService.instance = this;
    }
    return UserService.instance;
  }

  async create() {
    const result = await UserModel.create();
    return result;
  }

  async delete(data) {
    const result = await UserModel.create(data);
    return result;
  }

  async update(data) {
    const result = await UserModel.updateOne(data);
    return result;
  }

  async getOne(id) {
    const result = await UserModel.findById(id);
    return result;
  }

  async getList() {
    const result = await UserModel.find();
    return result;
  }
}

export default new UserService();
