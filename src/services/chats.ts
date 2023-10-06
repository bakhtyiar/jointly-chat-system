import axios from "axios";
import {routes_db} from "@/utils/routes_db";

const instance = axios.create({
    baseURL: process.env.DB_URL,
});
export interface IChat {
    "id": GUID,
    "name": string,
    "description": string,
    "createdAt": Date,
    "creatorId": GUID,
    "messagesId": GUID,
}

export const getAllChats = async () => {
    let chats: IChat[] | null = null;
    try {
        chats = await instance.get(routes_db.chats.path);
    } catch (error) {
        console.log(error);
    }
    return chats;
}