import { Car } from "../interface/car.interface"
import ItemModel from "../models/item";


const insertCar = async (item: Car) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
}

const getCarsServices = async () => {
    const responseItems = await ItemModel.find();
    return responseItems;
}

const getCarByIdService = async (id: string) => {
    const responseCar = await ItemModel.findOne({ _id: id });
    return responseCar;
}

const updateCarByIdService = async (id: string, carData: Car) => {
    const response = await ItemModel.findOneAndUpdate(
        { _id: id },
        carData,
        { new: true });

    return response;
}

const deleteCarByIdService = async (id: string) => {
    const response = await ItemModel.findOneAndDelete({ _id: id })
    return response;
}

export {
    insertCar, getCarsServices,
    getCarByIdService, updateCarByIdService,
    deleteCarByIdService
}