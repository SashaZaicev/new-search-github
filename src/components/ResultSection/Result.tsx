import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import s from "./Result.module.scss";
import notFound from "../../img/notFound.svg";
import UniversalEmptyP from "./UniversalEmptyP";
import SuccessPage from "./SuccessPage";
import {actionsUser, getUserTC, ProfileStateType, repositType, UserType} from "../../bll/profileReducer";
import {AppRootStateType, useTypedSelector} from "../../app/store";
import Preloader from "./preloader/Preloader";


const Result = () => {
    const dispatch = useDispatch();
    const paginationState = useTypedSelector<ProfileStateType>(state => state.profile)
    const resUser = useTypedSelector<UserType>(state => state.profile.user)
    const resRepositories = useTypedSelector<Array<repositType>>(state => state.profile.repositories)
    const perPageNumber = useTypedSelector<number>(state => state.profile.per_page)
    const userName = resUser.name === "" ? "User don't have name" : resUser.name;
    const notFoundPage = 'User not found'

    const onPageChanged = (pageNumber: number) => {
        dispatch(actionsUser.setCurrentPage(pageNumber))
        dispatch(getUserTC(resUser.login, pageNumber, perPageNumber))
        dispatch(actionsUser.setStart(pageNumber * 4 - 3))
        dispatch(actionsUser.setEnd(pageNumber * 4))
    }
    console.log(resRepositories)
    return (
        <div className={s.resultContainer}>
            {paginationState.preLoader ? <Preloader/> :
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
                </div>}
        </div>
    )
}

export default Result