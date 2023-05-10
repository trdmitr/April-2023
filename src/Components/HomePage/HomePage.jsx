import React from 'react'
import classes from "../components.module.css"
import { Link } from 'react-router-dom';

export const HomePage = () => {
    const imgUrl = "https://drive.google.com/uc?export=download&id=1HP8NM39jF-qSEbOmcwNPZm72OdXeNfgR"
    const imgUrl2 = 'https://drive.google.com/uc?export=download&id=1gDmNJaF2_dfJVjKM7qXWMS51s5fXavuy'
    const imgAlt = "Каверы Подземки"
    // const frontAudio = "https://drive.google.com/uc?export=download&id=1U3M7aGhmpFQHd3SNNupwghkrQagbRKq2";
    // const imgTzi = "https://drive.google.com/uc?export=download&id=1gsY4lPUU4pJ07s0JwDBeJjUYddkAuSr3"
  return (
      <div className="device device-iphone-x">
          <div className="device-frame">
              <div className="device-content">

                  <div>
                      <span className={classes.navLink}>Каверы апреля-2023!</span>
                     <Link to={`/cavers`} className={classes.navLink21}>Слушаем!</Link>
                      {/* <Link to={`/cavers${yearTrib22}`} className={classes.navLink22}>2022</Link>
                      <Link to={`/cavers${yearTrib23}`} className={classes.navLink23}>2023</Link> */}
                      <div className={classes.main}>
                      
                          {/* <div className={classes.article}><p >Вот и всё что было...</p></div> */}
                          <div className={classes.article}><img fetchpriority="high" role="presentation"  src={imgUrl} width={100} alt={imgAlt} /></div>
                          <div className={classes.article}><img fetchpriority="high" role="presentation"  src={imgUrl2} width={100} alt={imgAlt} /></div>
                      </div>
                  </div>
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
