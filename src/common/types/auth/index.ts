import {FieldErrors, FieldValues, UseFormRegister,} from "react-hook-form";

//description interface login page
interface IFormInputs {
    email: string;
    password: string;
}

export interface IPropsLogin<TFieldValues extends FieldValues = IFormInputs> {
    // setEmail: (value: string) => void;
    // setPassword: (value: string) => void;
    loading: boolean,
    navigate: (to: string) => void;
    register: UseFormRegister<TFieldValues>;
    errors: FieldErrors<TFieldValues>
}

//description interface registration page
//description interface login page
export interface IFormInputsRegister {
    firstName: string;
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface IPropsRegistration<TFieldValues extends FieldValues = IFormInputsRegister> {
    loading: boolean,
    navigate: (to: string) => void;
    register: UseFormRegister<TFieldValues>;
    errors: FieldErrors<TFieldValues>;
}

//description interface state=> user in slice auth
export interface IAuthState {
    user: IPublicUser,
    isLogged: boolean,
    isLoading: boolean,

}

//description interface user=> in interface=> IAuthState
interface IPublicUser {
    id: number | null,
    firstName: string,
    userName: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    watchlist: [IWatchlist]
}

//description interface watchlist=> in interface=> IPublicUser
interface IWatchlist {
    id: number | null,
    name: string,
    assetId: string,
    createdAt: string,
    updatedAt: string,
    userId: number | null
}

// interface ILoginData for thunk
export interface ILoginData {
    email: string,
    password: string,
}

// interface IRegistrationData for thunk
export interface IRegisterData {
    email: string,
    password: string,
    firstName: string,
    userName: string,
}