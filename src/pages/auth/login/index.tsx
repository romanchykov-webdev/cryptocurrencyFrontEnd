import React, {Fragment} from 'react';
import { TextField, Typography} from "@mui/material";
import {IPropsLogin} from "../../../common/types/auth";
// import AppButton from "../../../components/app-button/appButton";
import {useStyles} from "./style";
import AppLoadingButton from "../../../components/loading-button/loadingButton";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {

    const classes=useStyles()
    const {
        // setEmail,
        // setPassword,
        loading,
        navigate,
        register,
        errors
    } = props


    return (
        <>
            <Typography variant="h2"  textAlign='center' fontSize={32}>
                Авторизация
            </Typography>
            <Typography variant="body1" marginBottom={3} textAlign='center'>
                Введите ваш login и Password
            </Typography>

            <TextField
                error={!!errors.email}
                helperText={errors.email ? `${errors.email.message}` : ''}
                fullWidth={true} margin='normal' label="Email" variant="outlined"
                {...register('email')}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder='Введите ваш Email'/>
            <TextField
                error={!!errors.password}
                helperText={errors.password ? `${errors.password.message}` : ''}
                fullWidth={true} type='password' margin='normal' label="Password" variant="outlined"
                {...register('password')}
                // onChange={(e) => setPassword(e.target.value)}
                placeholder='Введите ваш Password'/>
            <AppLoadingButton
                loading={loading}
                type="submit"
                sx={{

                    marginTop: 2,
                    width: '60%',
                    marginBottom: 2
                }} variant="contained">Войти
            </AppLoadingButton>
            <Typography variant="body1" fontFamily='Poppins'

            >
                У вас нет аккаунт?
                <span
                    className={classes.incitingText}
                    onClick={() => navigate('/register')}
                >Регистрация</span>
            </Typography>
        </>
    );
};

export default LoginPage;