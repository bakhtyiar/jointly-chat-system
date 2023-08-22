import axios from "axios";
import {routes_db} from "@/utils/routes_db";

const instance = axios.create({
    baseURL: process.env.DB_URL,
});
export interface IPricingTableRowData {
    optionName: string,
    freeVer: boolean | string,
    individualSubscribition: boolean | string,
    corporativeSubscribition: boolean | string,
}

export const getAllPricingData = async (): Promise<IPricingTableRowData[] | null> => {
    let tablePricingData: IPricingTableRowData[] | null = null;
    try {
        tablePricingData = await instance.get(routes_db.pricingOptions.path);
    } catch (error) {
        console.log(error);
    }
    return tablePricingData;
}