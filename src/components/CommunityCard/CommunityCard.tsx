import {Avatar, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import React from "react";
import styled from "@emotion/styled";
import {pt3, pt4} from "@/utils/styleVariables";

interface Props {
    avatar: string,
    name: string,
    description: string
}

const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${pt3};
  margin-bottom: ${pt4};
`

export const CommunityCard = ({avatar, name, description}: Props) => {
    return (
        <Card sx={{ minWidth: 275 }} variant="outlined">
            <CardContent sx={{paddingBottom: 0}}>
                <StyledCardHeader>
                    <Avatar alt="Image of community" src={avatar} />
                    <Typography variant="subtitle1" component="div">
                        {name}
                    </Typography>
                </StyledCardHeader>
                <Typography variant="body1">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{justifySelf: 'end'}} endIcon={<ArrowRightAltIcon/>}>Join</Button>
            </CardActions>
        </Card>
    );
};
