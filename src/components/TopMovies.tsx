import {
    Box,
    Card,
    CardContent,
    CardHeader,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Checkbox,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useContext, useEffect } from 'react';
import { TopMovieContext } from '../contexts/TopMovieContext';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        topMoviesHeader: {
            paddingBottom: 0,
        },
        topMoviesList: {
            paddingTop: 0,
        },
        topMovieItem: {
            paddingTop: '2px',
            paddingBottom: '2px',
        },
    })
);
const TopMovies = () => {
    const classes = useStyles();
    // context
    const { topMovies, getTopMovies } = useContext(TopMovieContext);

    useEffect(() => {
        getTopMovies();
    }, []);

    return (
        <Box mt={1} ml={2}>
            <Card raised>
                <CardHeader
                    title='Top 10 movies'
                    className={classes.topMoviesHeader}
                    titleTypographyProps={{
                        variant: 'h4',
                        align: 'center',
                        color: 'primary',
                    }}
                />
                <CardContent className={classes.topMoviesList}>
                    <List>
                        {topMovies.map((movie) => (
                            <ListItem
                                button
                                className={classes.topMovieItem}
                                key={movie.imdbID}
                            >
                                <ListItemIcon>
                                    <Checkbox checked={movie.Watched} />
                                </ListItemIcon>
                                <ListItemText primary={movie.Title} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </Box>
    );
};

export default TopMovies;