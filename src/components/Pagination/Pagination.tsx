import React, {CSSProperties, ReactNode} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import s from "./MyPagination.module.scss";
import {actionsUser} from "../../bll/profileReducer";

interface IPaginationProps {
    page: number;
    pageCount: number;
    productTotalCount: number;
    getPage: (newPage: number, newPageCount: number) => void;


    title?: ReactNode;
    paginationStyle?: CSSProperties;
    buttonStyle?: CSSProperties;
    selectStyle?: CSSProperties;
}

interface paginationStateType {
    user: userType
    per_page: number
    startElement: number
    endElement: number

}

interface userType {
    public_repos: number
}

const Pagination: React.FC<IPaginationProps> = (
    {
        page, pageCount, productTotalCount, getPage,

        title = 'Pagination ', paginationStyle,
        buttonStyle, selectStyle
    }
) => {
    let pages = [];
    const dispatch = useDispatch();
    const paginationState = useSelector<AppRootStateType, paginationStateType>(state => state.profile)

    let lastPage = Math.ceil(paginationState.user.public_repos
        / paginationState.per_page);

    const getPages = (i: number, pageCount: number) => {
        getPage(i, pageCount)


    }
    for (let i = 1; i <= lastPage; i++) pages.push((
        <button
            key={i}
            className={page === i ? s.selectedPage : s.paginationElement}
            onClick={() => getPages(i, pageCount)}
        >
            {i}
        </button>
    ));

    if ((page + 3) < lastPage) {
        pages[page + 2] = (
            <span key={page + 3}>
                ...
            </span>
        );
        pages = pages.filter((p, i) => i < (page + 2) || i === (lastPage - 1));
    }
    if (page > 2) {
        pages[1] = (
            <span key={2}>
                ...
            </span>
        );
        pages = pages.filter((p, i) => i < 2 || i > page - 4);
    }
    const prevPage = () => {
        getPage(page - 1, pageCount);
        dispatch(actionsUser.setStart(paginationState.startElement - 4))
        dispatch(actionsUser.setEnd(paginationState.endElement - 4))
    }
    const nextPage = () => {
        getPage(page + 1, pageCount);
        dispatch(actionsUser.setStart(paginationState.startElement + 4))
        dispatch(actionsUser.setEnd(paginationState.endElement + 4))
    }
    const newV = paginationState.endElement

    return (
        <div className={s.Pagination}>

            <div style={{
                marginRight: '10px'
            }
            }>{`${paginationState.startElement} - ${newV}  of ${paginationState.user.public_repos} items`}</div>
            <div className={s.paginationBlock}>
                <div style={{
                    marginLeft: '5px',
                    marginRight: '5px',
                    display: 'flex'
                }}>
                    {<button className={s.arrow} disabled={page <= 1} onClick={() => {
                        prevPage()
                    }}>
                        {'<'}
                    </button>}
                </div>
                {pages}
                <div style={{
                    marginLeft: '5px',
                    marginRight: '5px',
                    display: 'flex'
                }}>
                    {<button className={s.arrow} disabled={page >= lastPage} onClick={() => {
                        nextPage()
                    }}>{'>'}</button>}
                </div>
            </div>
        </div>
    );
};

export default Pagination;