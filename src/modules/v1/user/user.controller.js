import UserService from "./user.service";

class UserController {
  static instance = null;

  constructor() {
    if (!UserController.instance) {
      UserController.instance = this;
    }
    return UserController.instance;
  }

  async create(req, res, next) {
    const reqBody = req.body;
    try {
      const user = await UserService.create(reqBody);

      return res.json({
        user,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    const id = req.params.id;
    try {
      const user = await UserService.delete(id);

      return res.json({
        user,
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    const reqBody = req.body;
    try {
      const user = await UserService.update(reqBody);

      return res.json({
        user,
      });
    } catch (error) {
      next(error);
    }
  }

  async getOne(req, res, next) {
    const id = req.params.id;
    try {
      const user = await UserService.getOne(id);

      return res.json({
        user,
      });
    } catch (error) {
      next(error);
    }
  }

  async getList(req, res, next) {
    try {
      const users = await UserService.getList();

      return res.json({
        users,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
