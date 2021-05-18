import React from 'react'
import {Route} from 'react-router-dom'
import UniversalEmptyP from "../ResultSection/UniversalEmptyP";
import search from "../../img/search.svg";
import Result from "../ResultSection/Result";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";

export const PATH = {
    HOME_PAGE: '/',
    SUCCESS_PAGE: '/search-user'

}

const emptyPage = 'Start with searching a GitHub user'
export const Routes = () => {
    const paginationState = useSelector((state: AppRootStateType) => state.profile)
    return (
        <div>
            {!paginationState.isSuccess ?
                <Route exact path={PATH.HOME_PAGE} component={() => <UniversalEmptyP
                    text={emptyPage}
                    image={search}
                />}/> :
                <Route path={PATH.SUCCESS_PAGE} children={() => <Result/>}/>}
        </div>
    )
}