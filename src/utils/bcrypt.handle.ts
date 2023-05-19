import { hash, compare } from "bcryptjs";

const encrypt = async (password: string) => {

    const passwordHash = await hash(password, 8);
    return passwordHash;
}

const verfied = async (passwordPlane: string, passwordHash: string) => {
    const isCorrect = await compare(passwordPlane, passwordHash);
    return isCorrect;
}

export { encrypt, verfied }