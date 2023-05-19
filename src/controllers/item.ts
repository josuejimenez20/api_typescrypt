import { Request, Response, response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
    insertCar, getCarsServices,
    getCarByIdService, updateCarByIdService,
    deleteCarByIdService
} from "../services/item";

const getCarByIdController = async ({ params }: Request, res: Response) => {
    try {
        const responseCar = await getCarByIdService(params.id);

        res.status(200);
        res.send(responseCar);
    } catch (error) {
        handleHttp(res, "ERROR_GET_CAR", error);
    }
}

const getCarsController = async (req: Request, res: Response) => {
    try {
        const responseCars = await getCarsServices();
        res.status(200);
        res.send(responseCars);
    } catch (error) {
        handleHttp(res, "ERROR_GET_CARS");
    }

}

const updateCarByIdController = async ({ params, body }: Request, res: Response) => {

    const { id } = params;

    try {
        const responseUpdateCar = await updateCarByIdService(id, body);

        res.status(200);
        res.send(responseUpdateCar);

    } catch (error) {
        handleHttp(res, "ERROR_UPDATE_ITEM");
    }

}

const insertCarController = async ({ body }: Request, res: Response) => {
    try {

        const responseItem = await insertCar(body);

        res.status(200);
        res.send(responseItem);

    } catch (error) {
        handleHttp(res, "ERROR_POST_ITEM", error);
    }
}

const deleteCarByIdController = async ({ params }: Request, res: Response) => {

    const { id } = params;

    try {

        const responseDeletedCar = await deleteCarByIdService(id);

        res.status(200);
        res.send(responseDeletedCar);

    } catch (error) {
        handleHttp(res, "ERROR_DELETE_ITEM");
    }
}

export {
    getCarByIdController, getCarsController,
    updateCarByIdController, insertCarController,
    deleteCarByIdController
}