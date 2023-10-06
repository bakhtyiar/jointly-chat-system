import {List} from "@mui/material";
import {getAllChats, IChat} from "@/services/chats";
import {useEffect, useState} from "react";
import {ChatListItemButton} from "@/components/ChatListItemButton/ChatListItemButton";

export const ChatList = ({handleChatOpen}) => {
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
        <List sx={{
            width: '100%',
            height: '100%',
            overflowY: 'auto',
        }} aria-label="chats">
            {chats.map((chat, index) => (
                <ChatListItemButton key={chat.name + '_' + index} name={chat.name} handleChatOpen={handleChatOpen}/>
            ))}
        </List>
    );
};
