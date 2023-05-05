import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import classes from "./CaverPage.module.css"
// import { Context } from '../context'
import Player from '../Player/Player';
import Modal from '../UI/Modal/Modal';
import About from '../UI/About';
import PlayButton from '../UI/Modal/PlayButton';
import CaverContent from './CaverContent';
export const CaverPage = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="device device-iphone-x">
      <div className="device-frame">
        <div className="device-content">
          <div className={classes.row}>
            <Modal visible={modal} setVisible={setModal}>
              <About />
            </Modal>
            <PlayButton onClick={() => setModal(true)}>
              <span role="img" aria-label="emoji name"> 📌 </span>
            </PlayButton>
            <div className={classes.column50}>
              <CaverContent />
            </div>
            <Player />
          </div>
          <Link to="/"><button className={classes.btnHome}>Главная</button></Link>
        </div>
      </div>
      <div className="device-stripe"></div>
      <div className="device-header">
        <div className="device-sensors"></div>
      </div>
      <div className="device-btns"></div>
      <div className="device-power"></div>
    </div>
  )
}
