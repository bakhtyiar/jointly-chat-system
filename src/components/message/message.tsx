import {Card, CardContent, CardHeader, Typography} from "@mui/material";
import {FallbackAvatar} from "@/components/FallbackAvatar/FallbackAvatar";
import styled from "@emotion/styled";

interface Props {
    creatorId: string,
    textContent: string,
    createdAt: Date,
    editedAt?: null | boolean | Date
}

const StyledCard = styled(Card)`
  border-radius: 0;
  box-shadow: none;
`

//todo: add Card element media part (AFTER MAKING INTERACTIVE DB)
export const Message = ({creatorId, textContent, createdAt, editedAt}: Props) => {
    return (
        <StyledCard>
            <CardHeader
                avatar={<FallbackAvatar name='random name'/>}
                title={<Typography variant="subtitle1">creatorId</Typography>}
            />
            <CardContent sx={{paddingTop: 0}}>
                <Typography variant="body1">{textContent}</Typography>
                <Typography variant="body2">{editedAt ? `Edited ${editedAt}` : createdAt}</Typography>
            </CardContent>
        </StyledCard>
    );
};
