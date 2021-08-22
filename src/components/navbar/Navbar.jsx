import React from 'react';
import * as Styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header>
      <div className={Styles.nav}>
        <div className={Styles.items} onClick={() => {console.log("click")}}>Boton 1</div>
        <div className={Styles.items} onClick={() => {console.log("click")}}>Boton 2</div>
        <div className={Styles.items} >Boton 3</div>
        <div className={Styles.items} >Boton 4</div>
        <div className={Styles.items} >Boton 5</div>
        <div className={Styles.items} >Boton 6</div>
      </div>
    </header>
  )
}

export default Navbar