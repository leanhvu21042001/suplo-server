import { Router } from "express";

import UserController from "./user.controller";

const router = Router();
const routes = [
  {
    method: "get",
    path: "/:id",
    middlewares: [],
    controller: UserController.getOne,
  },
  {
    method: "get",
    path: "/",
    middlewares: [],
    controller: UserController.getList,
  },
  {
    method: "post",
    path: "/",
    middlewares: [],
    controller: UserController.create,
  },
  {
    method: "delete",
    path: "/:id",
    middlewares: [],
    controller: UserController.delete,
  },
  {
    method: "patch",
    path: "/",
    middlewares: [],
    controller: UserController.update,
  },
];

routes.reduce((prevRouter, { method, path, middlewares, controller }) => {
  return prevRouter[method](path, ...middlewares, controller);
}, router);

export default router;
