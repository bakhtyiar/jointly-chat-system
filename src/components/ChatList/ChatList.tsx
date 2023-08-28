import {List} from "@mui/material";
import {getAllChats, IChat} from "@/services/chats";
import {useEffect, useState} from "react";
import {ChatListItemButton} from "@/components/ChatListItemButton/ChatListItemButton";
import styled from "@emotion/styled";

const StyledList = styled(List)`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`

export const ChatList = () => {
    let [chats, setChats] = useState<IChat[]>([])
    useEffect(() => {
        const fetch = async () => {
            let {data} = await getAllChats();
            if (data)
                setChats(data);
        }
        fetch();
    }, [])
    return (
        <StyledList aria-label="chats">
            {chats.map((chat, index) => (
                <ChatListItemButton key={chat.name + '_' + index} name={chat.name}/>
            ))}
        </StyledList>
    );
};
