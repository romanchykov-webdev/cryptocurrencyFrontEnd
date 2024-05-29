import {AppDispatch, RootStore} from "../../store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector

export const useAuth = () => {
    // const {isLogged} = useAppSelector((state) => state.auth)
    // return isLogged

    //get data to sessionStorage
    // if (sessionStorage.getItem("token")) {
    //     return true
    // } else {
    //     return false
    // }
    return !!sessionStorage.getItem("token")
    //get data to sessionStorage end
}