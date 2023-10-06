import {Stack} from "@mui/material";
import * as React from "react";
import {MessageAudio} from "@/components/MessageAudio/MessageAudio";

export const AudioStack = () => {
    return (<Stack spacing={2}>
            {srcSet.map((fileUrl)=> (
                <MessageAudio fileUrl={fileUrl}/>
            ))}
        </Stack>
    );
};

const srcSet = [
    'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3',
    'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3',
    'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3',
    'https://converter-audio-example-1.s3.eu-central-1.amazonaws.com/Russell%2C%2BMale%2B-%2BEnglish%2C%2BAustralian+(1)+(online-audio-converter.com).wav',
    'https://converter-audio-examples.s3.eu-central-1.amazonaws.com/Russell%2C+Male+-+English%2C+Australian.mp3'
];