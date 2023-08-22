import axios from "axios";
import {routes_db} from "@/utils/routes_db";

const instance = axios.create({
    baseURL: process.env.DB_URL,
});
export interface ICommunity {
    "id": GUID,
    "name": string,
    "description": string,
    "avatar": string,
    "registeredAt": Date,
    "creatorId": number,
    "administratorsId": number[],
    "moderatorsId": number[],
    "participantsId": number[]
}

export const getAllCommunities = async () => {
    let communities: ICommunity[] | null = null;
    try {
        communities = await instance.get(routes_db.communities.path);
    } catch (error) {
        console.log(error);
    }
    return communities;
}

export const getCommunitiesPaged = async (page: number, limit?: number): Promise<ICommunity[] | null> => {
    let communities: ICommunity[] | null = null;
    try {
        communities = await instance.get(routes_db.communities.path, {
            params: {
                '_page': page,
                ...(limit ? {'_limit': limit} : {}),
            }
        });
    } catch (error) {
        if (typeof error === 'string') { throw Error(error) }
    }
    return communities;
}