import { Router } from "express";
import { getFile } from "../controllers/upload";

const router = Router();

router.get('/', getFile);

export { router }