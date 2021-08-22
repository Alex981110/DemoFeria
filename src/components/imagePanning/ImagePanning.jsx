import React, { useState } from 'react';
import * as Styles from './ImagePanning.module.css';
import Logo from '../../assets/icons/Logo.svg';

const Image = () => {

  const url = "https://prc5.github.io/react-zoom-pan-pinch/static/media/big-image.12f95f12.jpeg"

  const arrayStands = {
    stands: [
      {
        id: 1,
        name: "algo",
        icon: "link",
        size: { width: 1, height: 2 },
        position: { x: 10, y: 10 },
        label: "algo",
        url: "link"
      },
      {
        id: 2,
        name: "algo",
        icon: "link",
        size: { width: 1, height: 2 },
        position: { x: 13, y: 21 },
        label: "algo",
        url: "link"
      },
      {
        id: 3,
        name: "algo",
        icon: "link",
        size: { width: 1, height: 2 },
        position: { x: 63, y: 42 },
        label: "algo",
        url: "link"
      },
      {
        id: 4,
        name: "algo",
        icon: "link",
        size: { width: 1, height: 2 },
        position: { x: 50, y: 42 },
        label: "algo",
        url: "link"
      },
      {
        id: 5,
        name: "algo",
        icon: "link",
        size: { width: 1, height: 2 },
        position: { x: 30, y: 12 },
        label: "algo",
        url: "link"
      },
      {
        id: 6,
        name: "algo",
        icon: "link",
        size: { width: 1, height: 2 },
        position: { x: 15, y: 20 },
        label: "algo",
        url: "link"
      }
    ]
  }

  const { stands } = arrayStands;

  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const handleCoords = (e) => {
    console.log("x:", e.clientX, "y:", e.clientY);
  }

  return (
    <div onClick={handleCoords}>
      <div className={Styles.icon}>
        <img alt="icon" src={Logo}/>
      </div>
      <img className={Styles.imageResp} alt="Logo" src={url} />
    </div>
  )
}

export default Image