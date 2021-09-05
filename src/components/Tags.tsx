import {Paper, Typography} from '@material-ui/core';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import React, {useEffect} from 'react';
import {useHomeStyle} from '../pages/Home/theme';
import {useDispatch, useSelector} from 'react-redux';
import {selectIsTagsLoaded, selectTagsItems} from '../store/tags/selectors';
import {fetchTags} from '../store/tags/actionCreators';
import {Link} from 'react-router-dom';

interface TagsProps {
    classes: ReturnType<typeof useHomeStyle>;
}

export const Tags: React.FC<TagsProps> = ({ classes}: TagsProps): React.ReactElement | null => {
    const items = useSelector(selectTagsItems)
    const isLoaded = useSelector(selectIsTagsLoaded)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch])
    if (!isLoaded) {
        return null;
    }

    return (
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Актуальные темы</b>
            </Paper>
            <List>
                { items.map(item => (
                    <React.Fragment key={item._id}>
                        <ListItem className={classes.rightSideBlockItem}>
                            <Link to={`/home/search?q=${item.name}`}>
                                <ListItemText
                                    primary={item.name}
                                    secondary={
                                        <Typography component="span" variant="body2">
                                            Твитов: {item.count}
                                        </Typography>
                                    }
                                >
                                </ListItemText>
                            </Link>
                        </ListItem>
                        <Divider component="li" />
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    )
}

