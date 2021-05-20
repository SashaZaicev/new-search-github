import React from 'react';
import { resUser } from './SuccessPage';
import s from "./SuccessPage.module.scss";

type RepositoriesPropsType = {
    resRepositories: Array<resRepositoriesType>,
    resUser: resUser
}

export interface resRepositoriesType {
    name: string,
    html_url: string,
    description: string
}


const Repositories: React.FC<RepositoriesPropsType> = ({
                                                           resRepositories,
                                                           resUser
                                                       }) => {
    const listRepositories = resRepositories.map((el: resRepositoriesType) => {
        return (
            <div key={el + el.name} className={s.repositoriesBlock}>
                <a target="_blank" rel={'noreferrer'} href={el.html_url}>{el.name}</a>
                <div>{el.description}</div>
            </div>

        )
    })
    return (
        <div className={s.HeaderBlock}>
            <div className={s.Header}>
                <div>Repositories ({resUser.public_repos})</div>
            </div>
            <div className={s.repositories}>{listRepositories}</div>

        </div>);
};

export default Repositories;