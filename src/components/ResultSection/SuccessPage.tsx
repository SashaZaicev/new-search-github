import React from 'react';
import s from './SuccessPage.module.scss'
import followers from "../../img/users.svg"
import follower from "../../img/notFound.svg"
import {useSelector} from "react-redux";
import repListEmpty from "../../img/repListEmpty.svg";

import {AppRootStateType} from "../../app/store";
import Repositories, {resRepositoriesType} from "./Repositories";
import UniversalEmptyP from "./UniversalEmptyP";
import Pagination from "../Pagination/Pagination";

type SuccessPropsType = {
    userName: string,
    resUser: resUser
    resRepositories: Array<resRepositoriesType>,
    paginationState: {}
    onPageChanged: (pageNumber: number) => void
}

export interface resUser {
    avatar_url: string
    html_url: string
    login: string
    followers: number
    following: number
    public_repos: number
    name:string
}

interface paginationStateType {
    page: number
    per_page: number
    portionSize: number
    preLoader: boolean
}

const SuccessPage: React.FC<SuccessPropsType> = ({
                                                     userName,
                                                     resUser,
                                                     resRepositories,
                                                     onPageChanged
                                                 }) => {
    const paginationState = useSelector((state: AppRootStateType): paginationStateType => state.profile)

    const repListEmptyPage = 'Repository list is empty'
    return (
        <div className={s.gridContainer}>
            <div className={s.Foto}>
                <img className={s.userImg} src={resUser.avatar_url} alt=""/>
                <div className={s.userName}><h3>{userName}</h3>
                    <div><a href={resUser.html_url} rel={'noreferrer'} target="_blank">{resUser.login}</a></div>
                </div>
                <div className={s.followingBlock}>
                    <span><img src={followers} alt=""/>{resUser.followers} followers</span>
                    <span><img src={follower} alt=""/>{resUser.following} following</span>
                </div>
            </div>
            {resRepositories.length !== 0
                ?
                <Repositories resRepositories={resRepositories} resUser={resUser}/>
                :
                <UniversalEmptyP
                    text={repListEmptyPage}
                    image={repListEmpty}
                />}
            <Pagination page={paginationState.page}
                        pageCount={paginationState.per_page}
                        productTotalCount={paginationState.portionSize}
                        getPage={onPageChanged}/>
        </div>
    );
};

export default SuccessPage;