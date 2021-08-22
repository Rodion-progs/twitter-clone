import React from 'react';
import { IconButton, Typography, Button } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import {useHomeStyle} from '../pages/Home';


interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyle>
}

export const SideMenu: React.FC<SideMenuProps> = ({classes}: SideMenuProps): React.ReactElement => {
    return (
        <ul className={classes.sideMenuList}>
            <li>
                <IconButton color="primary" className={classes.logo} >
                    <TwitterIcon className={classes.logoIcon} />
                </IconButton>
            </li>
            <li className={classes.sideMenuListItem}>
                    <SearchIcon className={classes.sideMenuListIcon} />
                <Typography className={classes.sideMenuListLabel}>Поиск</Typography>
            </li>
            <li className={classes.sideMenuListItem}>
                    <NotificationsNoneOutlinedIcon className={classes.sideMenuListIcon} />
                <Typography className={classes.sideMenuListLabel}>Уведомления</Typography>
            </li>
            <li className={classes.sideMenuListItem}>
                    <EmailOutlinedIcon className={classes.sideMenuListIcon} />
                <Typography className={classes.sideMenuListLabel}>Сообщения</Typography>
            </li>
            <li className={classes.sideMenuListItem}>
                    <BookmarkBorderOutlinedIcon className={classes.sideMenuListIcon} />
                <Typography className={classes.sideMenuListLabel}>Закладки</Typography>
            </li>
            <li className={classes.sideMenuListItem}>
                    <ListAltOutlinedIcon className={classes.sideMenuListIcon} />
                <Typography className={classes.sideMenuListLabel}>Список</Typography>
            </li>
            <li className={classes.sideMenuListItem}>
                    <PermIdentityOutlinedIcon className={classes.sideMenuListIcon} />
                <Typography className={classes.sideMenuListLabel}>Профиль</Typography>
            </li>
            <li>
               <Button className={classes.sideMenuButton} variant="contained" color="primary" fullWidth>Твитнуть</Button>
            </li>

        </ul>
    )
}
