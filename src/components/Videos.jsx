import React from 'react'
import { Stack, Box } from '@mui/material'
import { ChannelCard, VideoCard } from './';

const Videos = ({ videos, direction }) => {
    if (!videos?.length) return 'Loading...'
    console.log("Videos_Data:", videos)

    return (<Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item, idx) => (
            <Box key={idx}>
                {item.type === 'video' ? (item.video.videoId && <VideoCard video={item.video} />)
                    : (item.type === 'channel' && item.channel.channelId && <ChannelCard channelDetail={item.channel} />)}
            </Box>
        ))}
    </Stack>)

};

export default Videos

