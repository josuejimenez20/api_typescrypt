import { Request, Response, request } from "express";
import {
    authRegisterService,
    authLoginService
} from "../services/auth";

const authRegisterController = async ({ body }: Request, res: Response) => {

    try {
        const responseRegisterUser = await authRegisterService(body);
        res.status(200);
        res.send(responseRegisterUser);
    } catch (error) {
        res.status(500);
        res.send("ERROR_AUTH_REGISTER");
    }
}

const authLoginController = async ({ body }: Request, res: Response) => {

    const { email, password } = body;

    try {
        const responseAutoLogin = await authLoginService({ email, password });
        res.status(200);
        res.send(responseAutoLogin);
    } catch (error) {

    }
}

export {
    authRegisterController,
    authLoginController
}