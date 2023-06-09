import { Box, Stack } from '@mui/material';
import { ChannelCard, VideoCard } from './';

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <h4>Loading...</h4>;

  return (
    <Stack
      direction={direction || 'row'}
      flexWrap='wrap'
      justifyContent='start'
      gap={2}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};
export default Videos;
