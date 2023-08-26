import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
//:{avatar,badges,channelId,canonicalBaseUrl,descriptionSnippet,stats:{subscribers,subscribersText},title,username}
const ChannelCard = ({ channelDetail: { channelId, avatar, stats: { subscribers, subscribersText }, title, username, descriptionSnippet, canonicalBaseUrl, badges }, marginTop }) => {

    //console.log("ChannelData:",channelDetail)
    const channelthumbnail = avatar[1] && avatar[1].url;
    return (
        <Box sx={{
            boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: { md: '320px', xs: '356px' }, height: '326px', margin: 'auto', marginTop: marginTop,
        }}>
            <Link to={`/channel/${channelId}`}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
                    <CardMedia
                        image={channelthumbnail || demoProfilePicture}
                        alt={title}
                        sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
                    />
                    <Typography variant='h6'>
                        {title}
                        <CheckCircle sx={{ fontSize: 22, color: 'gray', ml: '5px' }} />
                    </Typography>
                    {subscribers && (
                        <Typography>
                            {subscribersText}
                        </Typography>
                    )}
                </CardContent>
            </Link>

        </Box>)


}

export default ChannelCard
