import axios from "axios";
import {routes_db} from "@/utils/routes_db";

const instance = axios.create({
    baseURL: process.env.DB_URL,
});
export interface IUser {
    id: GUID,
    username: string,
    email: string,
    avatar: string,
    password: string,
    birthDate: Date,
    registeredAt: Date,
    adminInCommunityId: GUID[],
    moderatorInCommunityId: GUID[],
    participantInCommunityId: GUID[]
}

interface fetchUserProps {
    id?: string,
    username?: string,
    email?: string,
}

export const getUsers = async ({id, username, email}: fetchUserProps) => {
    let users: IUser[] | null = null;
    try {
        if(id || username || email) {
            users = await instance.get(routes_db.users.path, {
                params: {
                    ...(id ? {'id': id} : {}),
                    ...(username ? {'username': username} : {}),
                    ...(email ? {'email': email} : {}),
                }
            });
        } else {
            users = await instance.get(routes_db.users.path);
        }
    } catch (error) {
        console.log(error);
    }
    return users;
}