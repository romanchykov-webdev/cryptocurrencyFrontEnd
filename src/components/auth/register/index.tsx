import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {IPropsRegistration} from "../../../common/types/auth";

const RegisterPage: React.FC<IPropsRegistration> = (props: IPropsRegistration): JSX.Element => {
    const {setEmail, setPassword, setFirstName, setUserName, setRepeatPassword, navigate} = props

    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>
                Регистрация
            </Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>
                Введите данние для регистрации
            </Typography>

            <TextField fullWidth={true} margin='normal' label="Имя" variant="outlined"
                       placeholder='Введите ваше имя'
                       onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField fullWidth={true} margin='normal' label="Username" variant="outlined"
                       placeholder='Введите ваш username'
                       onChange={(e) => setUserName(e.target.value)}
            />
            <TextField fullWidth={true} margin='normal' label="Email" variant="outlined"
                       placeholder='Введите ваш Email'
                       onChange={(e) => setEmail(e.target.value)}
            />
            <TextField fullWidth={true} type='password' margin='normal' label="Password" variant="outlined"
                       placeholder='Введите ваш Password'
                       onChange={(e) => setPassword(e.target.value)}
            />
            <TextField fullWidth={true} type='password' margin='normal' label="Password" variant="outlined"
                       placeholder='Повторите ваш Password'
                       onChange={(e) => setRepeatPassword(e.target.value)}
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