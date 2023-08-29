import {Card, CardContent, CardHeader, Typography} from "@mui/material";
import {FallbackAvatar} from "@/components/FallbackAvatar/FallbackAvatar";
import {FileWidget} from "@/components/FileWidget/FileWidget";
import {randomDate} from "@/utils/randomDate";
import {formatDate} from "@/utils/formatDate";

export const MessageDocument = () => {
    return (
        <Card sx={{
            borderRadius: 0,
            boxShadow: 'none'
        }}>
            <CardHeader
                avatar={<FallbackAvatar name='random name'/>}
                title={<Typography variant="subtitle1">creatorId</Typography>}
                subheader={formatDate(new Date())}
                sx={{pt: 0, pr: 0, pb: 1, pl: 0}}
            />
            <CardContent sx={{padding: 0}}>
                <FileWidget
                    name="Parrots" type="jpg"
                    url="https://upload.wikimedia.org/wikipedia/commons/b/ba/Thick-billed_parrots_in_a_U.S._zoo.jpg"
                    size="128000" creationDate={randomDate(new Date(2012, 0, 1), new Date())}
                />
            </CardContent>
        </Card>
    );
};
