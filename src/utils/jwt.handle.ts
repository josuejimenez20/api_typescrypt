import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "token.3902394";

const generateToke = (email: string) => {

    const jwt = sign({ email }, JWT_SECRET, {
        expiresIn: "2h"
    });
    return jwt;

}

const verifyToken = (jwt: string) => {
    const isOk = verify(jwt, JWT_SECRET);
    return isOk;
}

export { generateToke, verifyToken }