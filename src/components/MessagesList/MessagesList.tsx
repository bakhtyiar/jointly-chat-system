import React, {useEffect, useState} from "react";
import {Box, CircularProgress, List, Typography} from "@mui/material";
import {getMessagesPaged, IMessage} from "@/services/messages";
import {Message} from "@/components/Message/Message";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroll-component";
import {useChatScroll} from "@/utils/useChatScroll";

const StyledList = styled(List)`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  justify-self: stretch;
  display: flex;
  flex-direction: column-reverse;
`

export const MessagesList = () => {
    let [messages, setMessages] = useState<IMessage[]>([])
    const scrollRef = useChatScroll(messages);
    let page: number = 1;
    let hasMore = true;

    let fetchData = async () => {
        let {data} = await getMessagesPaged(page++);
        if (data) {
            hasMore = !!data.length;
            setMessages((prevState) => {
                return prevState.concat(data);
            })
        }
    }
    //todo : check is it can be w/out page dependency or at all w/out useEffect
    useEffect(() => {
        fetchData();
    }, [page])

    return (
        <StyledList aria-label="messages" ref={scrollRef}>
            <InfiniteScroll
                dataLength={messages.length} //This is important field to render the next data
                next={fetchData}
                hasMore={hasMore}
                loader={<Box sx={{p: 3}}><CircularProgress color="primary" variant="indeterminate"/></Box>}
                endMessage={
                    <Typography variant='overline' sx={{textAlign: 'center'}}>
                        End of chat history
                    </Typography>
                }
                inverse={true}
                style={{display: 'flex', flexDirection: 'column-reverse'}}
            >
                {messages.length ?
                    messages.map((message) => (
                            <Message key={String(message.id)} creatorId={String(message.creatorId)} textContent={message.textContent} createdAt={message.createdAt} editedAt={message.editedAt}/>
                        ))
                    : <></>
                }
            </InfiniteScroll>

        </StyledList>
    );
};
