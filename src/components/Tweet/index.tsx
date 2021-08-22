import React from 'react';
import {Avatar, ButtonBase, Grid, IconButton, Paper, Typography} from '@material-ui/core';
import classNames from 'classnames';
import CommentIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ReplyIcon from '@material-ui/icons/ReplyOutlined';
import {useHomeStyle} from '../../pages/Home';
interface TweetProps {
    text: string,
    classes: ReturnType<typeof useHomeStyle>;
    user: {
        fullname: string,
        username: string,
        avatarUrl: string,
    };
}

export const Tweet: React.FC<TweetProps> = ({ text, user, classes }: TweetProps): React.ReactElement => {
    return (
        <ButtonBase>

            <Paper className={classNames(classes.tweetHeader, classes.tweet)} variant="outlined">
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <Avatar className={classes.tweetAvatar} alt="Аватарка" src={user.avatarUrl} />
                    </Grid>
                    <Grid item xs={11}>
                        <Typography>
                            <b>{user.fullname} </b>
                            <span className={classes.tweetUserName}> @{user.username}</span>
                            <span className={classes.tweetUserName}> 1 ч</span>
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            { text }
                        </Typography>
                        <div className={classes.tweetIconWrap}>
                            <div>
                                <IconButton>
                                    <CommentIcon className={classes.tweetIcon} />
                                    <span className={classes.tweetIconCount} >1</span>
                                </IconButton>
                            </div>
                            <div>
                                <IconButton>
                                    <RepeatIcon className={classes.tweetIcon} />
                                    <span className={classes.tweetIconCount} >1</span>
                                </IconButton>
                            </div>
                            <div>
                                <IconButton>
                                    <LikeIcon className={classes.tweetIcon} />
                                    <span className={classes.tweetIconCount} >1</span>
                                </IconButton>
                            </div>
                            <div>
                                <IconButton>
                                    <ReplyIcon className={classes.tweetIcon} />
                                    <span className={classes.tweetIconCount} >1</span>
                                </IconButton>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </ButtonBase>
    )
}