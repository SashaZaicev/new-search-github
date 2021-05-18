import React from 'react';
import s from "./Result.module.css";
import {Redirect} from "react-router-dom";
import {PATH} from "../routes/Routes";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";

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