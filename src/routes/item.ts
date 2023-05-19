import { Router, Request, Response } from "express";

import {
    getCarByIdController, getCarsController, updateCarByIdController,
    deleteCarByIdController, insertCarController
} from "../controllers/item";

const router = Router();

router.get('/', getCarsController);
router.get('/:id', getCarByIdController);
router.post('/', insertCarController);
router.put('/:id', updateCarByIdController);
router.delete('/:id', deleteCarByIdController);

export { router }