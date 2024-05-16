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

const AuthRootComponents: React.FC = (): JSX.Element => {
    const [firstName, setFirstName] = useState('')
    const [userName, setUserName] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const location = useLocation()

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (location.pathname === '/login') {
            try {
                const userData = {
                    email: email,
                    password: password
                }
                const user = await instance.post('auth/login', userData)
                await dispatch(login(user.data))
                navigate('/') // если пользователь залогонился то переводим на homePage

                // console.log(user.data)
                // console.log(userData)
            } catch (error) {
                return error
            }
        } else if (location.pathname === '/register') {
            if (password === repeatPassword) {
                try {
                    const userData = {
                        firstName: firstName,
                        userName: userName,
                        email: email,
                        password: password,
                        // repeatPassword: repeatPassword,
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
                throw new Error(AppErrors.PasswordDoNoMatch)
            }
        }


    }

    return (
        <div className="root">
            <form className="form" onSubmit={handleSubmit}>
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
                            setEmail={setEmail}
                            setPassword={setPassword}
                            navigate={navigate}
                        />
                        : location.pathname === '/register' ?
                            <RegisterPage
                                setEmail={setEmail}
                                setPassword={setPassword}
                                setFirstName={setFirstName}
                                setUserName={setUserName}
                                setRepeatPassword={setRepeatPassword}
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