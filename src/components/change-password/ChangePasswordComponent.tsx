import React, {useState} from 'react';
import {Box, Grid, TextField} from "@mui/material";
import {useStyles} from "./style";
import AppLoadingButton from "../loading-button/loadingButton";
import {useAppDispatch} from "../../utils/hook";
import {updateUserPassword} from "../../store/thunks/auth";

const ChangePasswordComponent = () => {
    const [newPassword, setNewPassword] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const classes = useStyles();
    const dispatch = useAppDispatch();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // console.log('handleSubmit')
        const data = {
            oldPassword: oldPassword,
            newPassword: newPassword
        }
        dispatch(updateUserPassword(data))
    }

    return (
        <Grid
            component='form'
            noValidate
            autoComplete="off"
            className={classes.root}
            onSubmit={handleSubmit}
        >
            <Box
                className={classes.formWrapper}
            >
                <TextField
                    className={classes.inputField}
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    type='text'
                    label='Старый пароль'
                    variant='outlined'
                >

                </TextField>
                <TextField
                    className={classes.inputField}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    type='text'
                    label='Новый пароль'
                    variant='outlined'
                >
                </TextField>
                <Box className={classes.buttonSubmitBlock}>
                    <AppLoadingButton
                        type='submit'>
                        Изменить пароль
                    </AppLoadingButton>
                </Box>

            </Box>
        </Grid>
    );
};

export default ChangePasswordComponent;