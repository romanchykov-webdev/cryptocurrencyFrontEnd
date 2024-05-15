export interface IPropsLogin {
    setEmail: (value: string) => void;
    setPassword: (value: string) => void;
}

export interface IPropsRegistration {
    setEmail: (value: string) => void;
    setPassword: (value: string) => void;
    setFirstName: (value: string) => void;
    setUserName: (value: string) => void;
    setRepeatPassword: (value: string) => void;
}