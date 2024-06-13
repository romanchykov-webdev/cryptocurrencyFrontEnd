import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {useStyles} from "./style";
import {Box, Grid, TextField} from "@mui/material";
import AppLoadingButton from "../loading-button/loadingButton";
import {getPublicUser, updateUserInfo} from "../../store/thunks/auth";

const SettingsPersonalInfoComponent = () => {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    const [firstName, setFirstName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const {user} = useAppSelector(state => state.auth.user)
    // console.log(user)

    useEffect(() => {
        if (user) {
            setFirstName(user.firstName)
            setUserName(user.userName)
            setEmail(user.email)
        }

    }, [user]);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const data = {
            firstName: firstName,
            userName: userName,
            email: email,
        }
        dispatch(updateUserInfo(data))
        dispatch(getPublicUser())
    }

    return (
        <Grid
            component='form'
            noValidate
            autoComplete="off"
            className={classes.root}
            onSubmit={handleSubmit}
        >
            <Box className={classes.formWrapper}>
                <TextField
                    onChange={(e) => setFirstName(e.target.value)}
                    className={classes.inputField}
                    value={firstName}
                    type='text'
                    label='Имя'
                    variant='outlined'
                />
                <TextField
                    onChange={(e) => setUserName(e.target.value)}
                    className={classes.inputField}
                    value={userName}
                    type='text'
                    label='UserName'
                    variant='outlined'
                />
                <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    className={classes.inputField}
                    value={email}
                    type='text'
                    label='Email'
                    variant='outlined'
                />
                <Box className={classes.buttonBlock}>
                    <AppLoadingButton type='submit'>
                        Сохранить
                    </AppLoadingButton>
                </Box>
            </Box>
        </Grid>
    );
};

export default SettingsPersonalInfoComponent;