import {AppDispatch, RootStore} from "../../store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector

export const useAuth = () => {
    const {isLogged} = useAppSelector((state) => state.auth)
    return isLogged
}