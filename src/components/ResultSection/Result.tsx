import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import s from "../ResultSection/Result.module.css";
import notFound from "../../img/notFound.svg";
import UniversalEmptyP from "./UniversalEmptyP";
import SuccessPage from "./SuccessPage";
import {actionsUser, getUserTC} from "../../bll/profileReducer";
import {AppRootStateType} from "../../app/store";

const Result = () => {
    const dispatch = useDispatch();
    const paginationState = useSelector((state: AppRootStateType) => state.profile)
    const resUser = useSelector((state: AppRootStateType) => state.profile.user)
    const resRepositories = useSelector((state: AppRootStateType) => state.profile.repositories)
    const perPageNumber = useSelector((state: AppRootStateType) => state.profile.per_page)
    const userName = resUser.name === "" ? "User don't have name" : resUser.name;
    const notFoundPage = 'User not found'

    const onPageChanged = (pageNumber: number) => {
        dispatch(actionsUser.setCurrentPage(pageNumber))
        dispatch(getUserTC(resUser.login, pageNumber, perPageNumber))
        dispatch(actionsUser.setStart(pageNumber * 4 - 3))
        dispatch(actionsUser.setEnd(pageNumber * 4))
    }
    return (
        <div className={s.resultContainer}>
            <div className={s.result}>
                {resUser ?
                    (
                        <SuccessPage
                            userName={userName}
                            resUser={resUser}
                            resRepositories={resRepositories}
                            paginationState={paginationState}
                            onPageChanged={onPageChanged}
                        />
                    ) :
                    <UniversalEmptyP
                        text={notFoundPage}
                        image={notFound}
                    />
                }
            </div>
        </div>
    )
}

export default Result