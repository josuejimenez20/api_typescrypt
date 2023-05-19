import { Router } from "express";
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (filterName: string) => {
    const file = filterName.split('.').shift();
    return file;
}

readdirSync(PATH_ROUTER).filter((filterName) => {
    const cleanName = cleanFileName(filterName);    
    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => {
            router.use(`/${cleanName}`, moduleRouter.router);
        })
    }
})



export { router }
