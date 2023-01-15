import React from 'react';
import cx from 'classnames';
import style from './App.module.css'

const Button = ({ type, text }) => {
    return (
        <>
            <button class={cx(style.font, style[type])}>{text}</button>
        </>
    )
}

export default Button