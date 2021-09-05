import React, {useEffect} from 'react';
import {Typography, Container, Grid, InputAdornment, Paper,} from '@material-ui/core/'
import SearchIcon from '@material-ui/icons/SearchOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List/List';
import Button from '@material-ui/core/Button/Button';
import { Tweet } from '../../components/Tweet';
import { SideMenu } from '../../components/SideMenu';
import { AddTweetForm } from '../../components/Tweet/AddTweetForm';
import { useHomeStyle } from './theme';
import {SearchTextField} from "../../components/SearchTextField";
import {useDispatch, useSelector} from 'react-redux';
import {fetchTweets} from '../../store/ducks/tweets/actionCreators';
import {selectIsTweetsLoading, selectTweetsItems} from '../../store/ducks/tweets/selectors';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Tags } from '../../components/Tags';
import {Route} from 'react-router';

export const Home = (): React.ReactElement => {
    const classes = useHomeStyle();
    const dispatch = useDispatch()
    const tweets = useSelector(selectTweetsItems)
    const isLoading = useSelector(selectIsTweetsLoading)
    useEffect(() => {
        dispatch(fetchTweets());
    }, [dispatch])

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item sm={1} md={3}>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid item sm={8} md={6}>
                    <Paper className={classes.tweetWrapper} variant="outlined">
                        <Route path={['/home', '/home/search']} exact>
                            <Paper className={classes.tweetHeader} variant="outlined">
                                <Typography className={classes.tweetHeaderTitle} variant="h6">Твиты</Typography>
                            </Paper>
                        </Route>
                        <Route path="/home/tweet">
                            <Paper className={classes.tweetHeader} variant="outlined">
                                <Typography className={classes.tweetHeaderTitle} variant="h6">Твиты 2</Typography>
                            </Paper>
                        </Route>
                        <Route path={['/home', '/home/search']} exact>
                           <Paper>
                               <div className={classes.addForm}>
                                   <AddTweetForm classes={classes} />
                               </div>
                               <div className={classes.addFormBottomLine} />
                           </Paper>
                        </Route>
                        <Route path="/home" exact>
                            { isLoading ? (
                                    <div className={classes.tweetsCentered}>
                                        <CircularProgress />
                                    </div>
                                ) :
                                tweets.map(tweet =>
                                    <Tweet
                                        key={tweet._id}
                                        _id={tweet._id}
                                        classes={classes}
                                        text={tweet.text}
                                        user={tweet.user}
                                    />
                                )}
                        </Route>
                    </Paper>


                </Grid>
                <Grid item sm={3} md={3}>
                    <div className={classes.rightSide}>
                        <SearchTextField
                            variant="outlined"
                            fullWidth
                            placeholder="Поиск по Твиттеру"
                            inputProps={{
                                startadornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                        <Tags classes={classes} />
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                                <b>Кого читать</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt="Аватарка"
                                            src="https://source.unsplash.com/random/100x100?3"
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="dog"
                                        secondary={
                                            <Typography component="span" variant="body2">
                                                @favDog
                                            </Typography>
                                        }
                                    />
                                    <Button color="primary">
                                        <PersonAddIcon />
                                    </Button>
                                </ListItem>
                                <Divider component="li" />
                            </List>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}
