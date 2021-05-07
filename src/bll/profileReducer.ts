import {Dispatch} from "react";
import {userAPI} from "../api/api";

export const initialState = {
    repos: {},
    avatar_url: '',
};

const SET_USER = "SET_USER"

export const profileReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case  SET_USER: {
            return {
                ...state,
                repos: action.repos
            };
        }
        default:
            return state;
    }
};

export const actionsUser = {
    setUser: (repos: string) => ({type: SET_USER, repos}) as const,
}


export const getUserTC = (userName:string) => {
    return (dispatch: any) => {
        userAPI.getUser(userName)
            .then(res => {
                dispatch(actionsUser.setUser(res.data))
            })
        // .catch(er => {
        //     console.log(er)
        //     dispatch(actionsCheckIn.setLoading(false))
        //     dispatch(actionsCheckIn.setErrServ(er.response.data.error))
        //     setTimeout(() => dispatch(actionsCheckIn.setErrServ('')), 3000)
        // })
    }
}