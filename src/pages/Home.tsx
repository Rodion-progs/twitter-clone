import React from 'react';
import {
    Typography,
    Container,
    Grid,
    InputBase,
    createStyles,
    makeStyles,
    withStyles,
    Paper,
    Theme,
} from '@material-ui/core/'


import { Tweet } from '../components/Tweet';
import { SideMenu } from '../components/SideMenu';




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
        listStyle: 'none',
        padding: 0,
        margin: 0
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
        cursor: 'pointer',
        paddingTop: 15,
        paddingleft: 25,
      '&:hover': {
          backgroundColor: 'rgb(245, 248, 250)'
      }
    },
    tweetAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
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

    }
}));

const SearchTextField = withStyles(() =>
    createStyles({
    input: {
        borderRadius: 30,
        backgroundColor: '#E6ECF0',
        height: 45,
        padding: '0 0 0 15px',
    },
    root: {
        '& label.Mui-focuse': {
            color: 'green'
        }
    }
}))(InputBase);

export const Home = () => {
    const classes = useHomeStyle();

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetWrapper} variant="outlined">
                        <Paper className={classes.tweetHeader} variant="outlined">
                            <Typography className={classes.tweetHeaderTitle} variant="h6">Главная</Typography>
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
                <Grid item xs={3}>
                    <SearchTextField
                        fullWidth
                        placeholder="Поиск"
                    />
                </Grid>
            </Grid>
        </Container>
    )
}
