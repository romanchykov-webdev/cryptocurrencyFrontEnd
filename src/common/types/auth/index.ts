//description interface login page
export interface IPropsLogin {
    setEmail: (value: string) => void;
    setPassword: (value: string) => void;
    navigate: (to: string) => void;
}

//description interface registration page
export interface IPropsRegistration {
    setEmail: (value: string) => void;
    setPassword: (value: string) => void;
    setFirstName: (value: string) => void;
    setUserName: (value: string) => void;
    setRepeatPassword: (value: string) => void;
    navigate: (to: string) => void;
}

//description interface state=> user in slice auth
export interface IAuthState {
    user: IPublicUser,
    isLogged: boolean,
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