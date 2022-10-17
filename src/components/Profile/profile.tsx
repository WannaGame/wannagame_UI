import React from 'react';
import { userState } from '../../recoilStore';
import { useRecoilValue } from 'recoil';
import { User } from '../../utils/types';
import {
  Autocomplete,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  IconButtonProps,
  TextField,
  Typography,
} from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SettingsIcon from '@mui/icons-material/Settings';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { styled } from '@mui/material/styles';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title:
      'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "'Singin\' in the Rain' year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Profile: React.FC = () => {
  const user = useRecoilValue<User>(userState);
  const [gameListExpanded, setGameListExpanded] = React.useState(false);
  const [userSettingsExpanded, setUserSettingsExpanded] = React.useState(false);
  const [dailyStatusExpanded, setDailyStatusExpanded] = React.useState(true);

  const handleGameListExpandClick = () => {
    setGameListExpanded(!gameListExpanded);
  };

  const handleUserSettingsExpandClick = () => {
    setUserSettingsExpanded(!userSettingsExpanded);
  };

  const handleDailyStatusExpandClick = () => {
    setDailyStatusExpanded(!dailyStatusExpanded);
  };

  return (
    <Grid
      container
      spacing={4}
      sx={{ mt: '5em' }}
      direction="'olumn"'      justifyContent="'enter"'      alignItems="'enter"'    >
      <Grid item xs={6}>
        <Card raised sx={{}}>
          <CardHeader
            title={`Welcome on your WannaGame profile, ${user.username}`}
          />
          {user.banner && (
            <CardMedia
              component='img'
              height='194'
              image={`https://cdn.discordapp.com/banners/${user.discordId}/${user.avatar}.png`}
              alt='User Banner'
            />
          )}
          <CardContent>
            <Typography variant='body1'>
              From here, you can manage your profile settings, add some games to
              your current gaming list and update your status for today !
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={gameListExpanded}
              onClick={handleGameListExpandClick}
              aria-expanded={gameListExpanded}
              aria-label='manage your games'
            >
              <SportsEsportsIcon />
            </ExpandMore>
            <ExpandMore
              expand={userSettingsExpanded}
              onClick={handleUserSettingsExpandClick}
              aria-expanded={userSettingsExpanded}
              aria-label='manage your games'
            >
              <SettingsIcon />
            </ExpandMore>
            <ExpandMore
              expand={dailyStatusExpanded}
              onClick={handleDailyStatusExpandClick}
              aria-expanded={dailyStatusExpanded}
              aria-label='manage your games'
            >
              <EventAvailableIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={gameListExpanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography paragraph>
                Here you can manage your game list
              </Typography>
              <Autocomplete
                multiple
                id='tags-outlined'
                options={top100Films}
                getOptionLabel={(option) => option.title}
                defaultValue={[top100Films[13]]}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label='filterSelectedOptions'
                    placeholder='Favorites'
                  />
                )}
              />
            </CardContent>
          </Collapse>
          <Collapse in={userSettingsExpanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography paragraph>
                Here you can manage your game list
              </Typography>
              <Autocomplete
                multiple
                id='tags-outlined'
                options={top100Films}
                getOptionLabel={(option) => option.title}
                defaultValue={[top100Films[13]]}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label='filterSelectedOptions'
                    placeholder='Favorites'
                  />
                )}
              />
            </CardContent>
          </Collapse>
          <Collapse in={dailyStatusExpanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography paragraph>
                Here you can manage your game list
              </Typography>
              <Autocomplete
                multiple
                id='tags-outlined'
                options={top100Films}
                getOptionLabel={(option) => option.title}
                defaultValue={[top100Films[13]]}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label='filterSelectedOptions'
                    placeholder='Favorites'
                  />
                )}
              />
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Profile;
