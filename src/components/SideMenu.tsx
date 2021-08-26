import React, {useState} from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import { useHomeStyle } from '../pages/Home/theme';
import Hidden from '@material-ui/core/Hidden';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {ModalBlock} from "./ModalBlock";
import {AddTweetForm} from "./Tweet/AddTweetForm";


interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyle>
}

export const SideMenu: React.FC<SideMenuProps> = ({classes}: SideMenuProps): React.ReactElement => {
    
    const [visibleAddTweet, setVisibleAddTweet] = useState(false);
    const onCloseAddTweet = () => {
      setVisibleAddTweet(false);
    }

    const handleClickOpenAddTweet = () => {
        setVisibleAddTweet(true);
    }

    return (
        <ul className={classes.sideMenuList}>
            <li>
                <IconButton color="primary" className={classes.logo}>
                    <TwitterIcon className={classes.logoIcon}/>
                </IconButton>
            </li>
            <li className={classes.sideMenuListItem}>
                <SearchIcon className={classes.sideMenuListIcon}/>
                <Hidden smDown>
                    <Typography className={classes.sideMenuListLabel}>Поиск</Typography>
                </Hidden>
            </li>
            <li className={classes.sideMenuListItem}>
                <NotificationsNoneOutlinedIcon className={classes.sideMenuListIcon}/>
                <Hidden smDown>
                    <Typography className={classes.sideMenuListLabel}>Уведомления</Typography>
                </Hidden>
            </li>
            <li className={classes.sideMenuListItem}>
                <EmailOutlinedIcon className={classes.sideMenuListIcon}/>
                <Hidden smDown>
                    <Typography className={classes.sideMenuListLabel}>Сообщения</Typography>
                </Hidden>
            </li>
            <li className={classes.sideMenuListItem}>
                <BookmarkBorderOutlinedIcon className={classes.sideMenuListIcon}/>
                <Hidden smDown>
                    <Typography className={classes.sideMenuListLabel}>Закладки</Typography>
                </Hidden>
            </li>
            <li className={classes.sideMenuListItem}>
                <ListAltOutlinedIcon className={classes.sideMenuListIcon}/>
                <Hidden smDown>
                    <Typography className={classes.sideMenuListLabel}>Список</Typography>
                </Hidden>
            </li>
            <li className={classes.sideMenuListItem}>
                <PermIdentityOutlinedIcon className={classes.sideMenuListIcon}/>
                <Hidden smDown>
                    <Typography className={classes.sideMenuListLabel}>Профиль</Typography>
                </Hidden>
            </li>
            <li>
                <Button
                    onClick={handleClickOpenAddTweet}
                    className={classes.sideMenuButton}
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    <Hidden smDown>
                    Твитнуть
                    </Hidden>
                    <Hidden mdUp>
                        <CreateIcon />
                    </Hidden>
                </Button>
                <ModalBlock onClose={onCloseAddTweet} visible={visibleAddTweet} title="">
                    <div style={{width: '100%', maxWidth: 550}}>
                        <AddTweetForm rowsMax={15} classes={classes}/>
                    </div>
                </ModalBlock>
            </li>

        </ul>
    )
}
