import { Router, Request, Response } from "express";

import { authRegisterController, authLoginController } from "../controllers/auth";

const router = Router();

router.post('/register', authRegisterController);
router.post('/login', authLoginController);

export { router }