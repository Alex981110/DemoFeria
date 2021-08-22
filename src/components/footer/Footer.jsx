import React from 'react';
import * as Styles from './Footer.module.css';
import redes from '../../assets/icons/redesSociales.svg';
import frame from '../../assets/icons/Frame.svg';
import g9 from '../../assets/icons/G9.svg';
import uni from '../../assets/icons/universidad.svg';

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <button className={Styles.btn}>Postula aquí</button>
      <div>
        <p>Stands Carreras</p>
        <p>Charlas</p>
      </div>
      <div>
        <p>Tour Virutal 360º Stand Admisión 2022</p>
      </div>
      <div>
        <p>Financiamiento</p>
      </div>
      <div>
        <button className={Styles.btnRedes} onClick={() => { console.log("click"); }}>
          <img src={redes} alt="Redes sociales" /> {/*//TODO: redes sociales independiente */}
        </button>
      </div>
      <div>
        <img src={frame} alt="Frame" />
      </div>
      <div>
        <img src={g9} alt="G9" />
      </div>
      <div>
        <img src={uni} alt="universidad" />
      </div>
    </footer>
  )
}

export default Footer