import { Response, Request } from "express"
import { handleHttp } from "../utils/error.handle"

const getItemServices = async (req: Request, res: Response) => {

    try {
        res.send({
            msg: "Esto solo lo ven las personas con session / JWT"
        })
    } catch (error) {
        handleHttp(res, "ERROR_GET_ITEMS");
    }
}

export { getItemServices }