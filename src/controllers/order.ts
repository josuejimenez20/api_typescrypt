import { Response, Request } from "express"
import { handleHttp } from "../utils/error.handle"
import { JwtPayload } from "jsonwebtoken"


interface RequestExt extends Request {
    user?: string | JwtPayload
}

const getItemServices = async (req: RequestExt, res: Response) => {

    try {
        res.send({
            msg: "Esto solo lo ven las personas con session / JWT",
            user: req.user
        })
    } catch (error) {
        handleHttp(res, "ERROR_GET_ITEMS");
    }
}

export { getItemServices }