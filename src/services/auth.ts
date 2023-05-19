import { compare } from "bcryptjs";
import { User } from "../interface/user.interface"
import UserModel from "../models/user";
import { encrypt } from "../utils/bcrypt.handle";
import { Auth } from "../interface/auth.interface";
import { generateToke } from "../utils/jwt.handle";

const authRegisterService = async ({ email, password, name }: User) => {

    const checkId = await UserModel.findOne({ email })

    if (checkId) return "ALREADY_USER";

    const passwordEncrypted = await encrypt(password);

    const responseAuthRegister = await UserModel.create({
        email,
        password: passwordEncrypted,
        name
    })
    return responseAuthRegister;
}

const authLoginService = async ({ email, password: passwordPlane }: Auth) => {

    try {

        const userValidate = await UserModel.findOne({ email: email })

        if (!userValidate) return "USER_NOT_FOUND";

        const { password } = userValidate;

        const comparePassword = await compare(passwordPlane, password);

        if (!comparePassword) return "PASSWORD_INCORRECT";

        const token = generateToke(userValidate.email);

        return token;

    } catch (error) {

    }
}


export { authRegisterService, authLoginService }