import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  useTheme,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const Home: React.FC = () => {
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
        <CardContent>
          <Typography variant="h5" component="div">
            WannaPlay ?
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            tired of texting friends ?
          </Typography>
          <Typography variant="body2">
            Just register with your Discord account, fill your profile,
            subscribe to your friend's status feed and don't worry anymore.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button
            size="small"
            variant="contained"
            endIcon={<FontAwesomeIcon icon={faDiscord} />}
            onClick={() => {
              window.location.href = 'http://localhost:3333/api/auth/login';
            }}
          >
            Connect with your Discord account
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Home;
