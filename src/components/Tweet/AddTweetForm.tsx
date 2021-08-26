import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import classNames from 'classnames';
import {IconButton} from '@material-ui/core';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button/Button';
import {useHomeStyle} from '../../pages/Home';


interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyle>;
}

export const AddTweetForm: React.FC<AddTweetFormProps> = ({classes}: AddTweetFormProps): React.ReactElement => {
    const [text, setText] = useState<string>('');
    const textLimit = 280;
    const textLimitPecent = text.length / textLimit * 100;
    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget && textLimitPecent) {
            setText(e.currentTarget.value)
        }
    }
    return (
        <div className={classes.addForm}>
            <div className={classes.addFormBody}>
                <Avatar
                    className={classes.tweetAvatar}
                    alt={'Аватарка пользователя'}
                    src="https://images.unsplash.com/photo-1622984543976-ae57a77ccb2a"
                />
                <TextareaAutosize
                    onChange={handleChangeTextarea}
                    className={classes.addFormTextarea}
                    placeholder="Что происходит?"
                    value={text}
                />
            </div>
            <div className={classes.addFormBottom}>
                <div className={classNames(classes.tweetIconWrap, classes.addFormBottomAction)}>
                    <IconButton
                        color="primary"
                    >
                        <ImageOutlinedIcon style={{fontSize: 26}} />
                    </IconButton>
                    <IconButton
                        color="primary"
                    >
                        <EmojiIcon style={{fontSize: 26}} />
                    </IconButton>
                </div>
                <div className={classes.addFormBottomRight}>
                    {text &&  <>
                        <span>{text.length}</span>
                        <div className={classes.addFormCircleProgress}>
                          <CircularProgress
                            variant="static"
                            size={20}
                            thickness={5}
                            value={textLimitPecent}
                            style={ textLimitPecent >= 100 ?  {color: 'red'} : undefined}

                          />
                          <CircularProgress
                            style={{color: 'rgba(0, 0, 0, 0.2)'}}
                            variant="static"
                            size={20}
                            thickness={5}
                            value={100}
                          />
                        </div>
                    </>
                    }
                    <Button color="primary" variant="contained">Твитнуть</Button>
                </div>
            </div>
        </div>
    )
}
