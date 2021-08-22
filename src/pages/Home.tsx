import React from 'react';
import {
    Typography,
    Container,
    Grid,
    InputAdornment,
    TextField,
    makeStyles,
    withStyles,
    Paper,
    Theme,
} from '@material-ui/core/'
import SearchIcon from '@material-ui/icons/SearchOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List/List';
import Button from '@material-ui/core/Button/Button';
import { Tweet } from '../components/Tweet';
import { SideMenu } from '../components/SideMenu';
import { AddTweetForm } from '../components/Tweet/AddTweetForm';


export const useHomeStyle = makeStyles((theme: Theme) => ({
    wrapper: {
        minHeight: '100vh'
    },
    logo: {
      margin: '10px 0'
    },
    logoIcon: {
        fontSize: 32,
    },
    sideMenuList: {
        position: 'sticky',
        top: 0,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        maxWidth: 230,
    },
    sideMenuListItem: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 10,
        padding: '10px 10px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        '&:hover': {
            backgroundColor: 'rgba(29, 161, 242, 0.1)',
            color: theme.palette.primary.main,
            svg: {
                fill: theme.palette.primary.main
            }
        }
    },
    sideMenuListLabel: {
        fontWeigh: 700,
        fontSize: 20,
        marginLeft: 15
    },
    sideMenuListIcon: {
        fontSize: 32,
        marginRight: 15,
    },
    sideMenuButton: {
        padding: theme.spacing(3),
        marginTop: theme.spacing(3)
    },
    tweet: {
        display: 'flex',
        cursor: 'pointer',
        paddingTop: 15,
        paddingleft: 25,
      '&:hover': {
          backgroundColor: 'rgb(245, 248, 250)'
      }
    },
    tweetAvatar: {
        width: theme.spacing(6.5),
        height: theme.spacing(6.5),
        marginRight: 15,
    },
    tweetWrapper: {
        height: '100%',
        borderRadius: 0,
        borderTop: 'none',
        borderBottom: 'none',
    },
    tweetHeader: {
        borderRadius: 0,
        padding: '10px 15px',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
    },
    tweetHeaderTitle: {
        fontWeight: 800
    },
    tweetUserName: {
        color: '#9E9E9E'
    },
    tweetIcon: {
        fontSize: 20
    },
    tweetIconCount: {
        fontSize: 16,
        marginLeft: 10
    },
    tweetIconWrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 0,
    },
    rightSideBlock: {
        backgroundColor: '#f6f8fa',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        },
    },
    rightSideBlockHeader: {
        borderRadius: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 18,
            fontWeight: 800
        }
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        }
    },
    addForm: {
        padding: 30,
    },
    addFormBody: {
        display: 'flex',
        width: '100%',
    },
    addFormBottom: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    addFormBottomAction: {
        marginTop: 10,
        paddingLeft: 70,
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#E6ECF0',
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
            alighItems: 'center',
        }
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    }
}));

const SearchTextField = withStyles((theme: Theme) => ({
   root: {
       '& ,MuiOutlinedInput-root': {
           borderRadius: 30,
           backgroundColor: '#e6ecf0',
           padding: 0,
           paddingLift: 15,
           '&.Mui-focused': {
               backgroundColor: '#fff',
               '& fieldset': {
                   borderWidth: 1,
                   borderColor: theme.palette.primary.main,
                   '& svg path': {
                       fill: theme.palette.primary.main,
                   },
               },
           },
           '&:hover': {
               '& fieldset': {
                   borderColor: 'transparent'
               }
           },
           '& fieldset:': {
               borderColor: 'transparent',
               borderWidth: 1,
           },
       },
       // '& .MuiOutlinedInput-root': {
       //     padding: '12px 14px 14px 5px'
       // },
   },
}))(TextField)


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
