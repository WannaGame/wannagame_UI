import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Grid container spacing={2} sx={{ textAlign: 'center', mt: '5em' }}>
      <Grid item xs={12}>
        <Typography variant="h1">WannaGame ?</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {t('home.subtitle')}
        </Typography>
        <Typography variant="body2">{t('home.description')}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          size="small"
          variant="contained"
          endIcon={<FontAwesomeIcon icon={faDiscord} />}
          onClick={() => {
            window.location.href = 'http://localhost:3333/api/auth/login';
          }}
        >
          {t('home.connection_button')}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;
