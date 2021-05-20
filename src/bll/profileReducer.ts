import {userAPI} from "../api/api";
import {Dispatch} from "redux";

export const initialState = {
    user: {} as UserType,
    repositories: [] as Array<repositType>,
    avatar_url: '',
    per_page: 4,
    page: 1,
    portionSize: 4,
    isSuccess: false,
    startElement: 1,
    endElement: 4,
    preLoader: false

};

export type ProfileStateType = typeof initialState

const SET_USER = "SET_USER"
const SET_REPOSITORIES = "SET_REPOSITORIES"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_SUCCESS = "SET_SUCCESS"
const SET_PRELOADER = "SET_PRELOADER"
const SET_START = "SET_START"
const SET_END = "SET_END"

export const profileReducer = (state: ProfileStateType = initialState, action: ActionsTypes): ProfileStateType => {
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
        case  SET_PRELOADER: {
            return {
                ...state,
                preLoader: action.preLoader
            };
        }
        default:
            return state;
    }
};

export const actionsUser = {
    setUser: (user: UserType) => ({type: SET_USER, user: user}) as const,
    setRepositories: (repositories: Array<repositType>) => ({type: SET_REPOSITORIES, repositories}) as const,
    setCurrentPage: (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const,
    setSuccess: (isSuccess: boolean) => ({type: SET_SUCCESS, isSuccess}) as const,
    setPreLoader: (preLoader: boolean) => ({type: SET_PRELOADER, preLoader}) as const,
    setStart: (startElement: number) => ({type: SET_START, startElement}) as const,
    setEnd: (endElement: number) => ({type: SET_END, endElement}) as const,
}


export const getUserTC = (userName: string, page: number, per_page: number) => {
    return (dispatch: Dispatch) => {
        dispatch(actionsUser.setSuccess(true))
        dispatch(actionsUser.setPreLoader(true))
        userAPI.getUser(userName)
            .then(res => {
                dispatch(actionsUser.setUser(res.data))
                userAPI.getRepositories(userName, page, per_page)
                    .then(res => {
                        dispatch(actionsUser.setRepositories(res.data))
                        dispatch(actionsUser.setPreLoader(false))
                    })
            })
            .catch(er => {
                    dispatch(actionsUser.setUser({} as UserType))
                    dispatch(actionsUser.setPreLoader(false))
                }
            )
    }
}

type SetUserActionType = ReturnType<typeof actionsUser.setUser>
type SetRepositoriesActionType = ReturnType<typeof actionsUser.setRepositories>
type SetCurrentPageActionType = ReturnType<typeof actionsUser.setCurrentPage>
type SetSuccessActionType = ReturnType<typeof actionsUser.setSuccess>
type SetPreLoaderActionType = ReturnType<typeof actionsUser.setPreLoader>
type SetStartActionType = ReturnType<typeof actionsUser.setStart>
type SetEndActionType = ReturnType<typeof actionsUser.setEnd>


export type ActionsTypes =
    SetUserActionType
    | SetRepositoriesActionType
    | SetCurrentPageActionType
    | SetSuccessActionType
    | SetPreLoaderActionType
    | SetStartActionType
    | SetEndActionType

export type UserType = {
    avatar_url: string,
    bio: null
    blog: string
    company: null
    created_at: string
    email: null
    events_url: string
    followers: number
    followers_url: string
    following: number
    following_url: string
    gists_url: string
    gravatar_id: string
    hireable: null
    html_url: string
    id: number
    location: null
    login: string
    name: string
    node_id: string
    organizations_url: string
    public_gists: number
    public_repos: number
    received_events_url: string
    repos_url: string
    site_admin: boolean
    starred_url: string
    subscriptions_url: string
    twitter_username: null
    type: string
    updated_at: string
    url: string
}

export type repositType = {
    description: string
    avatar_url: string
    html_url: string
    login: string
    followers: number
    following: number
    public_repos: number
    name: string
}