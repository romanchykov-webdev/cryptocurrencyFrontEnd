import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {IPropsRegistration} from "../../../common/types/auth";

const RegisterPage: React.FC<IPropsRegistration> = (props: IPropsRegistration): JSX.Element => {
    const {
        navigate,
        register,
        errors
    } = props

    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>
                Регистрация
            </Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>
                Введите данные для регистрации
            </Typography>

            <TextField
                fullWidth={true}
                margin='normal'
                label="Имя"
                variant="outlined"
                error={!!errors.firstName}
                {...register('firstName')}
                placeholder='Введите ваше имя'
                helperText={errors.firstName ? errors.firstName.message : ''}
            />
            <TextField
                fullWidth={true}
                margin='normal'
                label="Username"
                variant="outlined"
                error={!!errors.userName}
                {...register('userName')}
                placeholder='Введите ваш userName'
                helperText={errors.userName ? errors.userName.message : ''}
            />
            <TextField
                fullWidth={true}
                margin='normal'
                label="Email"
                variant="outlined"
                error={!!errors.email}
                {...register('email')}
                placeholder='Введите ваш Email'
                helperText={errors.email ? errors.email.message : ''}
            />
            <TextField
                fullWidth={true}
                // type='password'
                margin='normal'
                label="Password"
                variant="outlined"
                error={!!errors.password}
                {...register('password')}
                placeholder='Введите ваш Password'
                helperText={errors.password ? errors.password.message : ''}
            />
            <TextField
                fullWidth={true}
                // type='password'
                margin='normal'
                label="Password"
                variant="outlined"
                error={!!errors.confirmPassword}
                {...register('confirmPassword')}
                placeholder='Повторите ваш Password'
                helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
            />


            <Button
                sx={{
                    fontFamily: 'Poppins',
                    marginTop: 2,
                    width: '60%',
                    marginBottom: 2
                }}
                type="submit"
                variant="contained">Регистрация</Button>
            <Typography variant="body1" fontFamily='Poppins'
                        sx={{
                            fontFamily: 'Poppins'
                        }}
            >
                У вас есть аккаунта?
                <span
                    className='incitingText'
                    onClick={() => navigate('/login')}
                >Авторизация</span>
            </Typography>
        </>
    );
};

export default RegisterPage;