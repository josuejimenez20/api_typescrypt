import { Router, Request, Response } from "express";

import { autoRegisterController } from "./controllers/auth";

const router = Router();

router.post('/register', autoRegisterController);
router.post('/login',);

export { router }