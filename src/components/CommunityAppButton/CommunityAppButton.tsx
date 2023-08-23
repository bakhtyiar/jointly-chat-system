import styled from "@emotion/styled";
import {borderRadius, pt6} from "@/utils/styleVariables";
import {grey} from "@mui/material/colors";
import {FallbackAvatar} from "@/components/FallbackAvatar/FallbackAvatar";
import Link from "next/link";
import {IconButton} from "@mui/material";

interface Props {
    avatar: string,
    name: string,
    id: GUID
}

const StyledAvatar = styled(FallbackAvatar)`
  width: ${pt6};
  height: ${pt6};
  border-radius: ${borderRadius};
  transition: background-color 0.2s;
  &:hover {
    background-color: ${grey[100]};
  }
`

export const CommunityAppButton = ({avatar, name, id}: Props) => {
    return (
        <Link href={'/'+id}><IconButton><StyledAvatar avatar={avatar} name={name} /></IconButton></Link>
    );
};
