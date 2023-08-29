import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import {Box, ButtonBase, Typography, useTheme} from "@mui/material";
import {borderRadius, pt3} from "@/utils/styleVariables";
import {formatBytes} from "@/utils/formatBytes";
import {formatDate} from "@/utils/formatDate";

interface Props {
    name: string,
    url: string,
    size: number,
    creationDate: Date,
    type?: string
}
//todo : add link to url file onClick mb
export const FileWidget = ({name, url, size, creationDate, type}: Props) => {
    const theme = useTheme();
    return (
        <ButtonBase sx={{
            padding: `${pt3}`,
            borderRadius: 2,
            transition: '0.3s',
            '&:hover': {
                backgroundColor: theme.palette["bgc"].dimmed,
            },
        }}>
            <InsertDriveFileIcon sx={{mr: 1}}/>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', borderRadius: borderRadius}}>
                <Typography variant="body1">{name}.{type}</Typography>
                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'baseline', gap: 1}}>
                    <Typography
                        variant="caption">
                        {formatBytes(size)}
                    </Typography>
                    <Typography
                        variant="caption">
                        {formatDate(creationDate)}
                    </Typography>
                </Box>
            </Box>
        </ButtonBase>
    );
};
