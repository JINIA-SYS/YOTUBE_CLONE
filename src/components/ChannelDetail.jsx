import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from "./"
import { FetchAPI } from '../utils/FetchAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id, searchTerm } = useParams();
  //console.log(channelDetail, videos)
  useEffect(() => {

    FetchAPI(`channel/details/?id=${id}`).then((data) => {
      setChannelDetail(data)
      const channelTitle = data.title;
      FetchAPI(`channel/search/?id=${id}&q=${channelTitle}`).then((data) => setVideos(data.contents))
    })

  }, [id])
  // &q=${searchTerm}  UC1NF71EwP41VdjAU1iXdLkw
  console.log("ChannelDetail:", channelDetail)
  console.log("ChannelVideos", videos)
  if (!channelDetail) return 'Loading...'

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(192,253,45,0.406687675070028) 74%)',
          zIndex: '10',
          height: '300px'
        }}></div>
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box display="flex" p="2" >
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />

      </Box>

    </Box >
  )
}

export default ChannelDetail