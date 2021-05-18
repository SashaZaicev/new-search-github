import React from 'react';
import s from './SuccessPage.module.css'
import followers from "../../img/users.svg"
import follower from "../../img/notFound.svg"
import {useSelector} from "react-redux";
import repListEmpty from "../../img/repListEmpty.svg";

import {AppRootStateType} from "../../app/store";
import Repositories from "./Repositories";
import UniversalEmptyP from "./UniversalEmptyP";
import Pagination from "../Pagination/Pagination";

type SuccessPropsType = {
    userName: string,
    resUser: any
    resRepositories: Array<{}>,
    paginationState: {}
    onPageChanged: (pageNumber: number) => void
}

const SuccessPage: React.FC<SuccessPropsType> = ({
                                                     userName,
                                                     resUser,
                                                     resRepositories,
                                                     onPageChanged
                                                 }) => {
    const paginationState = useSelector((state: AppRootStateType) => state.profile)

    const repListEmptyPage = 'Repository list is empty'

    return (
        <div className={s.gridContainer}>
            <div className={s.Foto}>
                <a href={resUser.html_url}><img className={s.userImg} src={resUser.avatar_url} alt=""/></a>
                <div className={s.userName}><h3>{userName}</h3>
                    <div><a href={resUser.html_url} rel={'noreferrer'} target="_blank">{resUser.login}</a></div>
                </div>
                <div className={s.followingBlock}>
                    <span><img src={followers} alt=""/>{resUser.followers} followers</span>
                    <span><img src={follower} alt=""/>{resUser.following} following</span>
                </div>
            </div>
            {resRepositories
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