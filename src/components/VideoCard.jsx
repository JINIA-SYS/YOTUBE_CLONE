import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoUrl, demoChannelUrl, demoVideoTitle, demoChannelTitle } from '../utils/constants'
//:{title,videoId,thumbnails,stats:{views},author:{channelId,avatar,badges} 
const VideoCard = ({ video: { author: { channelId, title: channelTitle }, thumbnails, videoId, title } }) => {
    //console.log("VideoData:",video)
    const videothumbnails = thumbnails[1] && thumbnails[1].url
    return (<Card sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia image={videothumbnails || demoThumbnailUrl}
                alt={title || demoVideoTitle}
                sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
            />
        </Link>
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: '106px' }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant='subtitle1' fontWeight="bold" color="#FFF">
                    {title || demoVideoTitle}
                </Typography>
            </Link>
            <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
                <Typography variant='subtitle2' fontWeight="bold" color="cyan">
                    {channelTitle || demoChannelTitle}
                    <CheckCircle sx={{ fontSize: 15, color: 'cyan', ml: '5px' }} />

                </Typography>
            </Link>
        </CardContent>

    </Card>)
}

export default VideoCard

