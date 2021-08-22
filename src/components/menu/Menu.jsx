import React from 'react';
import calendar from '../../assets/icons/Calendar.svg';
import rectangles from '../../assets/icons/Rectangles.svg';
import video from '../../assets/icons/Video.svg';
import chat from '../../assets/icons/Chat.svg';
import notification from '../../assets/icons/Notification.svg';
import menu from '../../assets/icons/Menu.svg';
import line from '../../assets/icons/Line.svg';
import * as Styles from './Menu.module.css';

const Menu = () => {
  return (
    <div className={Styles.container}>
      <button>
        <img src={calendar} alt="Calendario" />
      </button>
      <img src={line} alt="Linea" />
      <button>
        <img src={rectangles} alt="Rectángulos" />
      </button>
      <img src={line} alt="Linea" />
      <img src={video} alt="Video" />
      <img src={line} alt="Linea" />
      <img src={chat} alt="Chat" />
      <img src={line} alt="Linea" />
      <img src={notification} alt="Notificaciones" />
      <img src={line} alt="Linea" />
      <img src={menu} alt="Menu" />
    </div>
  )
}

export default Menu
