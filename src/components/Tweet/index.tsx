import React from 'react';
import {Avatar, IconButton, Paper, Typography} from '@material-ui/core';
import classNames from 'classnames';
import CommentIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ReplyIcon from '@material-ui/icons/ReplyOutlined';
import {useHomeStyle} from '../../pages/Home/theme';
import {Link} from 'react-router-dom';

interface TweetProps {
    text: string,
    _id: string,
    classes: ReturnType<typeof useHomeStyle>;
    user: {
        fullname: string,
        username: string,
        avatarUrl: string,
    };
}

export const Tweet: React.FC<TweetProps> = ({text, user, classes, _id}: TweetProps): React.ReactElement => {
    return (
        <Link className={classes.tweetWrapperLink} to={`/home/tweet/${_id}`}>
            <Paper className={classNames(classes.tweetHeader, classes.tweet)} variant="outlined">
               <Avatar className={classes.tweetAvatar} alt="Аватарка" src={user.avatarUrl}/>
               <div>
                       <Typography>
                           <b>{user.fullname} </b>
                           <span className={classes.tweetUserName}> @{user.username}</span>
                           <span className={classes.tweetUserName}> 1 ч</span>
                       </Typography>
                       <Typography variant="body1" gutterBottom>
                           {text}
                       </Typography>
                       <div className={classes.tweetIconWrap}>
                           <div>
                               <IconButton>
                                   <CommentIcon className={classes.tweetIcon}/>
                                   <span className={classes.tweetIconCount}>1</span>
                               </IconButton>
                           </div>
                           <div>
                               <IconButton>
                                   <RepeatIcon className={classes.tweetIcon}/>
                                   <span className={classes.tweetIconCount}>1</span>
                               </IconButton>
                           </div>
                           <div>
                               <IconButton>
                                   <LikeIcon className={classes.tweetIcon}/>
                                   <span className={classes.tweetIconCount}>1</span>
                               </IconButton>
                           </div>
                           <div>
                               <IconButton>
                                   <ReplyIcon className={classes.tweetIcon}/>
                                   <span className={classes.tweetIconCount}>1</span>
                               </IconButton>
                           </div>
                       </div>
                   </div>
            </Paper>
        </Link>
    )
}
