import React from 'react';
import {Result} from "./Result";
import s from "./Result.module.css"

function ResultContainer() {
    return (
        <div className={s.resultContainer}>
            <Result/>
        </div>
    );
}

export default ResultContainer