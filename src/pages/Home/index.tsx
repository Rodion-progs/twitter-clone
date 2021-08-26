import React from 'react';
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


export const Home = (): React.ReactElement => {
    const classes = useHomeStyle();

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item sm={1} md={3}>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid item sm={8} md={6}>
                    <Paper className={classes.tweetWrapper} variant="outlined">
                        <Paper className={classes.tweetHeader} variant="outlined">
                            <Typography className={classes.tweetHeaderTitle} variant="h6">Главная</Typography>
                        </Paper>
                        <Paper>
                            <AddTweetForm classes={classes} />
                            <div className={classes.addFormBottomLine} />
                        </Paper>
                        {
                            [...new Array(20).fill(
                                <Tweet
                                classes={classes}
                                text="Текст — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов."
                                user={{
                                    fullname: "Имя фамилия",
                                    username: "Ник",
                                    avatarUrl: "https://images.unsplash.com/photo-1622984543976-ae57a77ccb2a",
                                }}
                            />
                            )]
                        }
                    </Paper>


                </Grid>
                <Grid item sm={3} md={3}>
                    <div className={classes.rightSide}>
                        <SearchTextField
                            variant="outlined"
                            fullWidth
                            placeholder="Поиск по Твиттеру"
                            inputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                                <b>Актуальные темы</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary="Санкт-Петербург"
                                        secondary={
                                            <Typography component="span" variant="body2">
                                                Твитов: 3 331
                                            </Typography>
                                        }
                                    >
                                    </ListItemText>
                                </ListItem>
                                <Divider component="li" />
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary="#коронавирус"
                                        secondary={
                                            <Typography component="span" variant="body2">
                                                Твитов: 143 356
                                            </Typography>
                                        }
                                    >
                                    </ListItemText>
                                </ListItem>
                                <Divider component="li" />
                                <Divider component="li" />
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary="Россия"
                                        secondary={
                                            <Typography component="span" variant="body2">
                                                Твитов: 143 356
                                            </Typography>
                                        }
                                    >
                                    </ListItemText>
                                </ListItem>
                                <Divider component="li" />
                            </List>
                        </Paper>
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                                <b>Кого читать</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt="Аватарка"
                                            src="https://images.unsplash.com/photo-1622984543976-ae57a77ccb2a"
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
