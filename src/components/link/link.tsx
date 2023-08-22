import React, {ReactNode} from 'react';
import MUILink from "@mui/material/link";
import NextLink from "next/link";

interface Props {
    NextProps: React.ReactElement;
    MUIProps: React.ReactElement;
    children: React.ReactNode;
}

const Link = ({NextProps, MUIProps, children}: Props) => {
    return (
        <NextLink {...NextProps}>
            <MUILink {...MUIProps}>
                {children}
            </MUILink>
        </NextLink>
    );
};

export default Link;