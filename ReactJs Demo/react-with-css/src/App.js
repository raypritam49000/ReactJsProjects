import './App.css';
import './App.scss'
import style from './App.module.css'
import cx from 'classnames';
import React from 'react'
import Button from './Button';

const App = () => {
  return (
    <div>
      <h3 className={'one two'} >Welcome to SahoSoft Solutions !!!</h3>
      <h3 className='three'>Welcome to Androtech4u Java !!!</h3>
      <h3 className='four'>Welcome to Java Script World!!!</h3>
      <h3 className={style.one}>Welcome to Spring Framework!!!</h3>
      <h3 className={style.one + " " + style.two}>Welcome to Spring Boot Framework!!!</h3>
      <h3 className={`${style.one} ${style.two}`}>Welcome to Spring Boot Framework!!!</h3>
      <h3 className={cx(style.one)}>Welcome to React Js </h3>
      <h3 className={cx(style.one, style.two)}>Welcome to React Js </h3>
      <h4 className={cx(style.one, { [style.two]: false })}>Css With Classname</h4>
      <Button type="save" text="Save Data"/>
      <Button type="cancle" text="Cancle Data"/>
    </div>
  )
}

export default App