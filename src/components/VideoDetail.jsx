import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle, Search, SettingsInputSvideoSharp } from '@mui/icons-material';
import Videos from './Videos'
import { FetchAPI } from '../utils/FetchAPI'
const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams();
  useEffect(() => {
    FetchAPI(`video/details/?id=${id}`).then((data) => setVideoDetail(data))

    FetchAPI(`video/related-contents/?id=${id}`).then((data) => setVideos(data.contents))
  }, [id])
  console.log("VideosDetail:", videoDetail)

  if (!videoDetail) return 'Loading...'
  const { author: { channelId, title: channelTitle }, stats: { views, likes }, title } = videoDetail
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant='h5' fontWeight="bold" p={2} >
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>

                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color='#fff' >
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant='body1' sx={{ opacity: 0.7 }} > {parseInt(views).toLocaleString()} views</Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>{parseInt(likes).toLocaleString()} likes </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail