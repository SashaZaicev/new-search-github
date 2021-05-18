import React from 'react';
import s from "./SuccessPage.module.css";

type RepositoriesPropsType = {
    resRepositories: Array<any>,
    resUser: any,
}
const Repositories: React.FC<RepositoriesPropsType> = ({
                                                           resRepositories,
                                                           resUser
                                                       }) => {
    const listRepositories = resRepositories.map((el) => {
        return (
            <div key={el + el.name} className={s.repositoriesBlock}>
                <a target="_blank" rel={'noreferrer'} href={el.html_url}>{el.name}</a>
                <div>{el.description}</div>
            </div>

        )
    })
    return (
        <div>
            <div className={s.Header}>
                <div>Repositories ({resUser.public_repos})</div>
            </div>
            <div className={s.repositories}>{listRepositories}</div>

        </div>);
};

export default Repositories;