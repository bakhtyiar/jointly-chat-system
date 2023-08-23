import React, {useEffect, useState} from 'react';
import {Avatar, Box, Button, IconButton, useTheme} from "@mui/material";
import Link from "next/link";
import {routes} from "@/utils/routes";
import styled from "@emotion/styled";
import {borderRadius, pt2, pt3, pt4, pt6} from "@/utils/styleVariables";
import {getAllCommunities, ICommunity} from "@/services/communities";
import {CommunityAppButton} from "@/components/CommunityAppButton/CommunityAppButton";
import AddIcon from '@mui/icons-material/Add';
import ExploreIcon from '@mui/icons-material/Explore';
//todo: unmock buttons, set links etc.
const StyledHeader = styled.header`
  height: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const StyledBrandLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  color: black;
  transition: background-color 0.2s;
`

const StyledCommunities = styled.div`
  justify-self: stretch;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  padding-right: ${pt3};
  padding-left: ${pt3};
`

const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pt2};
  align-items: center;
  justify-self: end;
  padding-bottom: ${pt4};
  padding-top: ${pt4};
`

const AppHeader = () => {
    let [communities, setCommunities] = useState<ICommunity[]>([]);

    let fetchData = async () => {
        let {data} = await getAllCommunities();
        if (data) {
            setCommunities(data)
        }
    }
    //todo : check is it can be w/out hooks just next.js props
    useEffect(() => {
        fetchData();
    }, [])


    return (
        <StyledHeader>
            <StyledBrandLink href={routes.index.path}><IconButton><Avatar>J</Avatar></IconButton></StyledBrandLink>
            <StyledCommunities>
                {communities && communities.map((community, index) => <CommunityAppButton
                    key={community.name + '_' + index} avatar={community.avatar} name={community.name} id={community.id}/>)}
            </StyledCommunities>
            <StyledButtons>
                <Link href=""><IconButton color="default"><AddIcon/></IconButton></Link>
                <Link href=""><IconButton color="primary"><ExploreIcon/></IconButton></Link>
            </StyledButtons>
        </StyledHeader>
    );
};

export default AppHeader;