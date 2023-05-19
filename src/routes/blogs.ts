import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    try {
        res.status(200).json({
            msg: "Hello World Api"
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
});

export { router }