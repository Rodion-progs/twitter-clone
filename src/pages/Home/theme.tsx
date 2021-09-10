import {makeStyles, Theme} from "@material-ui/core";

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

    tweetAvatar: {
        width: theme.spacing(6.5),
        height: theme.spacing(6.5),
        marginRight: 15,
    },
    tweetWrapperLink: {
        color: 'inherit',
        textDecoration: 'none'
    },
    tweetsCentered: {
        marginTop: 50,
        textAlign: 'center'
    },
    tweetWrapper: {
        height: '100%',
        borderRadius: 0,
        borderTop: 'none',
        borderBottom: 'none',
    },
    tweetHeader: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: 0,
        padding: '10px 15px',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
    },
    tweet: {
        display: 'flex',
        alignItems: 'flex-start',
        cursor: 'pointer',
        paddingTop: 15,
        paddingleft: 25,
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)'
        }
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
        },
        '& a': {
           color: 'inherit',
           textDecoration: 'none',
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
