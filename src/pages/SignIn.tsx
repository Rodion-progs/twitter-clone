import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { ModalBlock } from '../components/ModalBlock';


export const useStylesSignIn = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh'
    },
    infoSide: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexBasis: '50%',
        padding: 15,
        backgroundColor: '#71C9F8',
        overflow: 'hidden',
        // backgroundColor: '#1DA1F2',
    },
    infoSideBg: {
        position: 'absolute',
        width: '240%',
        height: '240%',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#1DA1F2'
    },
    infoSideList: {
        position: 'relative',
        width: 380,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        fontWeight: 500,
        fontSize: 20,
        color: '#FFFFFF'
    },
    infoSideListItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 40
    },
    infoSideListIcon: {
        marginRight: 15,
        fontSize: 32
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexBasis: '50%',
        padding: 15,

    },
    loginSideTwitterIcon: {
        fontSize: 45,
        marginBottom: 20
    },
    loginSideWrapper: {
        width: 380
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 45
    },
    loginSideField: {
        marginBottom: 18,
    },
    registerField: {
        marginBottom: theme.spacing(5),
    },
    loginFormControl: {
        marginBottom: theme.spacing(2),
    },
}));

export const SignIn: React.FC = (): React.ReactElement => {
    const classes = useStylesSignIn();
    const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn');
    };

    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp');
    };

    const handleCloseModal = (): void => {
        setVisibleModal(undefined);
    };

    return (
        <div className={classes.wrapper}>
             <section className={classes.infoSide}>
                 <TwitterIcon className={classes.infoSideBg}/>
                <ul className={classes.infoSideList}>
                    <li className={classes.infoSideListItem}>
                        <SearchIcon className={classes.infoSideListIcon} />
                        <Typography variant="h6">
                            ?????????????? ?? ??????, ?????? ?????? ??????????????????
                        </Typography>
                    </li>
                    <li className={classes.infoSideListItem}>
                        <PeopleOutlineIcon className={classes.infoSideListIcon} />
                        <Typography variant="h6">
                            ??????????????, ?? ?????? ?????????????? ?? ????????
                        </Typography>
                    </li>
                    <li className={classes.infoSideListItem}>
                        <MessageIcon className={classes.infoSideListIcon} />
                        <Typography variant="h6">
                            ?????????????????????????????? ?? ??????????????
                        </Typography>
                    </li>
                </ul>
             </section>
            <section className={classes.loginSide}>
               <div className={classes.loginSideWrapper}>
                   <TwitterIcon color='primary' className={classes.loginSideTwitterIcon} />
                   <Typography variant="h4" className={classes.loginSideTitle}>
                       ??????????????, ?????? ???????????????????? ?? ???????? ?????????? ????????????
                   </Typography>
                   <Typography gutterBottom><b>?????????????????????????????? ?? ???????????????? ?????????? ????????????</b></Typography>
                   <Button
                       onClick={handleClickOpenSignUp}
                       style={{ marginBottom: 20,  }}
                       variant='contained'
                       color='primary'
                       fullWidth
                   >????????????????????????????????????</Button>
                   <Button
                       onClick={handleClickOpenSignIn}
                       variant='outlined'
                       color='primary'
                       fullWidth>??????????</Button>


                   <ModalBlock
                       visible={visibleModal === 'signIn'}
                       onClose={handleCloseModal}
                       classes={classes}
                       title="?????????? ?? ??????????????">
                       <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                           <FormGroup aria-label="position" row>
                               <TextField
                                   className={classes.loginSideField}
                                   autoFocus
                                   id="email"
                                   label="E-Mail"
                                   InputLabelProps={{
                                       shrink: true,
                                   }}
                                   variant="filled"
                                   type="email"
                                   fullWidth
                               />
                               <TextField
                                   className={classes.loginSideField}
                                   autoFocus
                                   id="password"
                                   label="????????????"
                                   InputLabelProps={{
                                       shrink: true,
                                   }}
                                   variant="filled"
                                   type="password"
                                   fullWidth
                               />
                               <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>
                                   ??????????
                               </Button>
                           </FormGroup>
                       </FormControl>
                   </ModalBlock>

                   <ModalBlock
                       visible={visibleModal === 'signUp'}
                       onClose={handleCloseModal}
                       classes={classes}
                       title="???????????????? ?????????????? ????????????">
                       <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                           <FormGroup aria-label="position" row>
                               <TextField
                                   className={classes.registerField}
                                   autoFocus
                                   id="name"
                                   label="??????"
                                   InputLabelProps={{
                                       shrink: true,
                                   }}
                                   variant="filled"
                                   type="name"
                                   fullWidth
                               />
                               <TextField
                                   className={classes.registerField}
                                   autoFocus
                                   id="email"
                                   label="E-Mail"
                                   InputLabelProps={{
                                       shrink: true,
                                   }}
                                   variant="filled"
                                   type="email"
                                   fullWidth
                               />
                               <TextField
                                   className={classes.registerField}
                                   autoFocus
                                   id="password"
                                   label="????????????"
                                   InputLabelProps={{
                                       shrink: true,
                                   }}
                                   variant="filled"
                                   type="password"
                                   fullWidth
                               />
                               <Button variant="contained" color="primary" fullWidth>
                                   ??????????
                               </Button>
                           </FormGroup>
                       </FormControl>
                   </ModalBlock>

               </div>
             </section>
        </div>
    );
}


