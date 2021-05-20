import React from 'react';
import s from "./Result.module.scss";

type UniversalPropsType = {
    image?: string,
    text?: string,

}

function UniversalEmptyP(props: UniversalPropsType) {

    let {image, text} = props;

    return (
        <div className={s.initResult}>
            <img className={s.searchIcon} src={image} alt=""/>
            <span>{text}</span>
        </div>
    );
}

export default UniversalEmptyP