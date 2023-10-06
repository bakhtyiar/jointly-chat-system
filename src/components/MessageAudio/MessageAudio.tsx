import {Card, CardContent, CardHeader, Typography} from "@mui/material";
import {FallbackAvatar} from "@/components/FallbackAvatar/FallbackAvatar";
import ReactPlayer from "react-player/lazy";
import {formatDate} from "@/utils/formatDate";

interface Props {
    creatorId: string,
    fileUrl: string,
    createdAt: Date,
}

export const MessageAudio = ({creatorId, fileUrl, createdAt}: Props) => {
    return (
        <Card sx={{
            borderRadius: 0,
            boxShadow: 'none'
        }}>
            <CardHeader
                avatar={<FallbackAvatar name='random name'/>}
                title={<Typography variant="subtitle1">creatorId</Typography>}
                subheader={formatDate(createdAt || new Date())}
                sx={{pt: 0, pr: 0, pb: 2, pl: 0}}
            />
            <CardContent sx={{padding: 0}}>
                <ReactPlayer
                    url={fileUrl}
                    controls
                    height="54px"
                    width="100%"
                    />
            </CardContent>
        </Card>
    );
};
