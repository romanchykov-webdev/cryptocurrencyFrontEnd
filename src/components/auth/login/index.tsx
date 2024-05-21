import React, {Fragment} from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {IPropsLogin} from "../../../common/types/auth";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {

    const {setEmail, setPassword, navigate, register, errors} = props


    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>
                Авторизация
            </Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>
                Введите ваш login и Password
            </Typography>

            <TextField
                error={!!errors.email}
                helperText={errors.email ? `${errors.email.message}` : ''}
                fullWidth={true} margin='normal' label="Email" variant="outlined"
                {...register('email', {
                    required: 'Это обязательное поле',
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Неверный формат email'
                    }
                })
                }
                // onChange={(e) => setEmail(e.target.value)}
                placeholder='Введите ваш Email'/>
            <TextField
                error={!!errors.password}
                helperText={errors.password ? `${errors.password.message}` : ''}
                fullWidth={true} type='password' margin='normal' label="Password" variant="outlined"
                {...register('password', {
                    required: 'Это обязательное поле',
                    minLength: 3
                })
                }
                // onChange={(e) => setPassword(e.target.value)}
                placeholder='Введите ваш Password'/>
            <Button
                type="submit"
                sx={{
                    fontFamily: 'Poppins',
                    marginTop: 2,
                    width: '60%',
                    marginBottom: 2
                }} variant="contained">Войти</Button>
            <Typography variant="body1" fontFamily='Poppins'
                        sx={{
                            fontFamily: 'Poppins'
                        }}
            >
                У вас нет аккаунт?
                <span
                    className='incitingText'
                    onClick={() => navigate('/register')}
                >Регистрация</span>
            </Typography>
        </>
    );
};

export default LoginPage;