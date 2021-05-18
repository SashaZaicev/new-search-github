import {userAPI} from "../api/api";
import {Dispatch} from "redux";

export const initialState = {
    user: {},
    repositories: [],
    avatar_url: '',
    per_page: 4,
    page: 1,
    portionSize: 4,
    isSuccess: false,
    startElement: 1,
    endElement: 4,

};

const SET_USER = "SET_USER"
const SET_REPOSITORIES = "SET_REPOSITORIES"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_SUCCESS = "SET_SUCCESS"
const SET_START = "SET_START"
const SET_END = "SET_END"

export const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case  SET_START: {
            return {
                ...state,
                startElement: action.startElement
            }
        }
        case  SET_END: {
            return {
                ...state,
                endElement: action.endElement
            };
        }
        case  SET_USER: {
            return {
                ...state,
                user: action.user
            };
        }
        case  SET_REPOSITORIES: {
            return {
                ...state,
                repositories: action.repositories
            };
        }
        case  SET_CURRENT_PAGE: {
            return {
                ...state,
                page: action.currentPage
            };
        }
        case  SET_SUCCESS: {
            return {
                ...state,
                isSuccess: action.isSuccess
            };
        }
        default:
            return state;
    }
};

export const actionsUser = {
    setUser: (user: string) => ({type: SET_USER, user: user}) as const,
    setRepositories: (repositories: string) => ({type: SET_REPOSITORIES, repositories}) as const,
    setCurrentPage: (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const,
    setSuccess: (isSuccess: boolean) => ({type: SET_SUCCESS, isSuccess}) as const,
    setStart: (startElement: number) => ({type: SET_START, startElement}) as const,
    setEnd: (endElement: number) => ({type: SET_END, endElement}) as const,
}


export const getUserTC = (userName: string, page: number, per_page: number) => {
    return (dispatch: Dispatch) => {
        dispatch(actionsUser.setSuccess(true))
        userAPI.getUser(userName)
            .then(res => {
                dispatch(actionsUser.setUser(res.data))
                userAPI.getRepositories(userName, page, per_page)
                    .then(res => {
                        dispatch(actionsUser.setRepositories(res.data))
                    })
            })
            .catch(er => {
                    dispatch(actionsUser.setUser(''))
                }
            )
    }
}