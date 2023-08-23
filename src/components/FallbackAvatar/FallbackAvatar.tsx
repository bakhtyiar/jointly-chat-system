import {Avatar} from "@mui/material";
import {stringAvatar} from "@/utils/avatarFunctions";

interface Props {
    avatar?: string,
    name: string,
}

export const FallbackAvatar = ({name, avatar}: Props) => {
    if (avatar)
        return (<Avatar alt={name} src={avatar}/>)
    else
        return (<Avatar {...stringAvatar(name)}/>)

};
