import fs from "fs";
import path from "path";
import { Router } from "express";
import ConsolePrint from "@/utils/ConsolePrint";

const loadRoutes = (folderPath, prefix = "/") => {
  const router = Router();
  //* 2 dots to make sure you in /src. NOT utils
  const modulesPath = path.join(__dirname, "..", folderPath);

  fs.readdirSync(modulesPath).forEach(async function (routePath) {
    import(`${modulesPath}/${routePath}/${routePath}.route.js`)
      .then((content) => {
        router.use(`${prefix}/${routePath}`, content.default);
        ConsolePrint.warn(
          `Router Loaded: ${prefix}/${routePath}/${routePath}.route.js`
        );
      })
      .catch(ConsolePrint.error);
  });

  return router;
};

export default loadRoutes;
