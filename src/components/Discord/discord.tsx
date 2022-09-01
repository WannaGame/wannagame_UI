import React from 'react';
import { userState } from '../../recoilStore';
import { useRecoilValue } from 'recoil';
import { User } from '../../utils/types';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Discord: React.FC = () => {
  const user = useRecoilValue<User>(userState);
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: theme.palette.grey['300'],
        color: 'text.primary',
      }}
    >
      <Card raised sx={{ bgcolor: theme.palette.primary.light }}>
        <CardHeader
          avatar={
            <Avatar
              alt={'User Avatar'}
              src={`https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`}
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={user.username}
        />
        {user.banner && (
          <CardMedia
            component="img"
            height="194"
            image={`https://cdn.discordapp.com/banners/${user.discordId}/${user.avatar}.png`}
            alt="User Banner"
          />
        )}
        <CardContent>
          <Typography variant="h5" component="div">
            Welcome on your WannaPlay profile
          </Typography>
          <Typography variant="body2">
            From here, you can manage your profile settings, add some games to
            your current gaming list and update your status for today !
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Discord;
