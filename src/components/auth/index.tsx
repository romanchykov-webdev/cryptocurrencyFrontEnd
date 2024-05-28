import React, {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import LoginPage from './login';
import RegisterPage from './register';
import './style.scss'
import {Box} from "@mui/material";
import {instance} from "../../utils/exios";
import {useAppDispatch} from "../../utils/hook";
import {login} from "../../store/slice/auth";
import {AppErrors} from "../../common/errors";
import {useForm, UseFormRegister} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import {LoginSchema, RegisterSchema} from "../../utils/yup";
import {IFormInputsRegister} from '../../common/types/auth'





const AuthRootComponents: React.FC = (): JSX.Element => {
    // const [firstName, setFirstName] = useState('')
    // const [userName, setUserName] = useState('')
    // const [repeatPassword, setRepeatPassword] = useState('')

    // const [password, setPassword] = useState('')
    // const [email, setEmail] = useState('')

    const location = useLocation()

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm({
        resolver: yupResolver(
            location.pathname === '/login' ? LoginSchema : RegisterSchema,
        )
    })

    console.log('errors', errors)
    const handleSubmitForm = async (data: any) => {

        console.log('data', data)
        if (location.pathname === '/login') {
            try {
                const userData = {
                    email: data.email,
                    password: data.password
                }
                const user = await instance.post('auth/login', userData)
                await dispatch(login(user.data))
                navigate('/') // если пользователь залогонился то переводим на homePage

                // console.log(user.data)
                // console.log(userData)
            } catch (e) {
                const error = new Error(AppErrors.ErrorPassword);
                console.log(error);
                return error;
                // return error
            }
        } else if (location.pathname === '/register') {
            console.log(data)
            // if (password === repeatPassword) {
            if (data.password === data.confirmPassword) {
                try {
                    const userData = {
                        firstName: data.firstName,
                        userName: data.userName,
                        email: data.email,
                        password: data.password,
                        // confirmPassword: confirmPassword,
                    }

                    const newUser = await instance.post('auth/register', userData)
                    console.log(newUser.data)
                    await dispatch(login(newUser.data))
                    navigate('/')
                    // console.log(userData)

                } catch (error) {

                    console.log(error)
                    return error
                }
            } else {
                const error = new Error(AppErrors.PasswordDoNoMatch);
                console.log(error);
                return error;
                // throw new Error(AppErrors.PasswordDoNoMatch)
            }
        }


    }

    return (
        <div className="root">
            <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    maxWidth={640}
                    margin='auto'
                    padding={5}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                >
                    {location.pathname === '/login'
                        ? <LoginPage
                            // setEmail={setEmail}
                            // setPassword={setPassword}
                            navigate={navigate}
                            register={register}
                            errors={errors}
                        />
                        : location.pathname === '/register' ?
                            <RegisterPage
                                register={register as unknown as UseFormRegister<IFormInputsRegister>}
                                errors={errors}
                                navigate={navigate}
                            />
                            : null}
                </Box>
            </form>
        </div>
    )

    //return ( location.pathname === '/login' ? <LoginPage /> : location.pathname==='/register' ? <RegisterPage/> : null);
};

export default AuthRootComponents;