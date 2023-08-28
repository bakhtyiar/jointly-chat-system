import axios from "axios";
import {routes_db} from "@/utils/routes_db";

const instance = axios.create({
    baseURL: process.env.DB_URL,
});
export interface IMessage {
    "id": GUID,
    "chatId": GUID,
    "creatorId": GUID,
    "textContent": string,
    "mediaContent": string | string[] | null,
    createdAt: Date,
    "editedAt": boolean | Date,
}

export const getAllMessages = async () => {
    let messages: IMessage[] | null = null;
    try {
        messages = await instance.get(routes_db.messages.path);
    } catch (error) {
        console.log(error);
    }
    return messages;
}

export const getMessagesPaged = async (page: number, limit?: number) => {
    let messages: IMessage[] | null = null;
    try {
        messages = await instance.get(routes_db.messages.path, {
            params: {
                '_page': page,
                ...(limit ? {'_limit': limit} : {}),
            }
        });
    } catch (error) {
        console.log(error);
    }
    return messages;
}