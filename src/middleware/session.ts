import { NextFunction, Request, Response } from "express"
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";


interface RequestExt extends Request {
    user?: string | JwtPayload
}


const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {

    try {

        const jwtByUser = req.headers.authorization || '';

        const jwt = jwtByUser.split(' ').pop() // [Bearer, '111111']
        const isUser = verifyToken(`${jwt}`);

        if (!isUser) {
            res.status(401);
            res.send("Session invalida");
            return;
        }
        // Here create in "req" the property "user"
        // with the user decrypted
        req.user = isUser;

        next();

    } catch (error) {
        console.log(error);
        res.status(402);
        res.send("Session no valida");
    }
}

export { checkJwt }