import { Router } from "express";

import { getItemServices } from "../controllers/order";
import { checkJwt } from "../middleware/session";

/**
 * This route can only be accessed if
 * the user has the correct token
 */

const router = Router();

router.get('/', checkJwt, getItemServices);

export { router }