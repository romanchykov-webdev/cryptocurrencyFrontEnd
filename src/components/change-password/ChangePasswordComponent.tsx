import React, {useState} from 'react';
import {Box, Grid, TextField} from "@mui/material";
import {useStyles} from "./style";
import AppLoadingButton from "../loading-button/loadingButton";
import {useAppDispatch} from "../../utils/hook";
import {updateUserPassword} from "../../store/thunks/auth";
import AlertComponent from "../alert/AlertComponent";


const ChangePasswordComponent = () => {
    const [newPassword, setNewPassword] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const classes = useStyles();
    const dispatch = useAppDispatch();

    //Alert
    const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);
    const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");
    const [open, setOpen] = useState<boolean>(false);
    //Alert

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const data = {
                oldPassword: oldPassword,
                newPassword: newPassword
            };
            await dispatch(updateUserPassword(data)).unwrap(); // Предполагаем, что unwrap используется для обработки отклоненных Thunk
            //Alert
            setSnackbarMessage(`Вы изменили свой старый пароль на: ${newPassword}`);
            setSnackbarSeverity("success");
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 2000)
            //Alert
        } catch (error) {
            // console.error('Ошибка при изменении пароля', error);
            //Alert
            setSnackbarMessage('Произошла ошибка при изменении пароля. Попробуйте еще раз.');
            setSnackbarSeverity("error");
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 2000)
            //Alert
        }
    };

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
            {snackbarMessage && (
                <AlertComponent message={snackbarMessage} severity={snackbarSeverity} isOpen={open}/>
            )}
        </Grid>
    );
};

export default ChangePasswordComponent;