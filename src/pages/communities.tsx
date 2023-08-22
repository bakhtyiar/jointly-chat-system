import React, {useEffect, useState} from 'react';
import PromoLayout from "@/components/PromoLayout/PromoLayout";
import InfiniteScroll from 'react-infinite-scroll-component';
import {getCommunitiesPaged, ICommunity} from "@/services/communities";
import {CommunityCard} from "@/components/CommunityCard/CommunityCard";
import {Box, CircularProgress, Typography} from "@mui/material";
import {pt3} from "@/utils/styleVariables";
//todo : add search function
//todo : move header to left column and rotate 90 deg
const Communities = () => {
    let [communities, setCommunities] = useState<ICommunity[]>([]);
    let page: number = 1;
    let hasMore = true;

    let fetchData = async () => {
        let {data} = await getCommunitiesPaged(page++);
        hasMore = !!data.length;
        if (data) {
            setCommunities((prevState) => {
                return prevState.concat(data);
            })
        }
    }
    //todo : check is it can be w/out page dependency or at all w/out useEffect
    useEffect(() => {
        fetchData();
    }, [page])

    return (
        <PromoLayout>
            <main>
                <h1>Communities</h1>
                <InfiniteScroll
                    dataLength={communities.length} //This is important field to render the next data
                    next={fetchData}
                    hasMore={hasMore}
                    loader={<Box sx={{p: 3}}><CircularProgress color="primary" variant="indeterminate"/></Box>}
                    endMessage={
                        <Typography variant='overline' sx={{textAlign: 'center'}}>
                            Yay! You have seen it all
                        </Typography>
                    }
                    style={{display: 'flex', flexDirection: 'column', gap: pt3}}
                >
                    {communities.length ?
                        communities.map((item) => <CommunityCard key={String(item.id)} avatar={item.avatar}
                                                                 name={item.name} description={item.description}/>)
                        : <></>
                    }
                </InfiniteScroll>
            </main>
        </PromoLayout>
    );
};

export default Communities;