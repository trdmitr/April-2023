import React, { Fragment, useMemo } from 'react'
import { useParams } from "react-router";
import classes from "../components.module.css"
import { Link, useNavigate } from 'react-router-dom'
// import { Context } from '../context'
import { audioSource, tzitata, videoSource } from '../Hooks/utils';
// import Loader from '../Loader/Loader';
import RoundLoader from '../Loader/RoundLoader';
import { useSelector } from 'react-redux';
// import {add_to_cart, different_product_are_loaded, products_are_loaded } from "Redux\Action_creators.js";
const SingContent = () => {
    const navigate = useNavigate();
    const params = useParams();
    // const id = useParams();
    // const { data } = useContext(Context);
      const currSings = useSelector(
        ({ songs_reducer: { all_songs } }) => all_songs.filter(results => results.id === params.id)
      );
      console.log("ALL_PROD", currSings)
    // const currSings = useMemo(() => {
    //     if (all_songs.length === 0) {
    //         return <Loader />
    //     }
    //     else {
    //         return Array.from(all_songs).filter(all_songs => all_songs.id === params.id);
    //     }
    // }, [all_songs])
    return (
        useMemo(() => {
            if (!currSings.length) {
                return (
                    <div className='loadBlock'>
                        <RoundLoader />
                        <Link to="/"><button className={classes.btnError}>На главную</button></Link>
                    </div>
                )
            }
            // const tzitata1 = useSingContent(tzitata1(currSing.picture))
            return currSings.map((currSing) =>
                <Fragment>
                    <div className={classes.mediaSong} key={currSing.id}>
                        <img className={classes.mediaImage_modal} src={currSing.photo} width={80} alt={currSing.name} />
                        <div className={classes.headerSong}>
                            <p>{currSing.name}</p></div>
                        <a className={[classes.linkTo, currSing.linkTo ? '' : classes.mediaHidden].join(' ')} href={currSing.linkTo} target="_blank" rel="noopener noreferrer"> Канал исполнителя </a>
                        <div className=
                            {
                                classes.audioBlock
                            }>
                            {audioSource(currSing.audio1, currSing.audio_name1)}
                            {audioSource(currSing.audio2, currSing.audio_name2)}
                            {audioSource(currSing.audio3, currSing.audio_name3)}
                            {/* {audioSource(currSing.rezAudio2, currSing.rezAudio1)} */}
                        </div>
                        <div className={classes.videoBlock}
                        // {
                        //   [classes.videoBlock, currSing.video1 ? '' : classes.mediaHidden].join(' ')
                        >
                            {videoSource(currSing.video1, currSing.video_name1)}
                            {videoSource(currSing.video2, currSing.video_name2)}
                            {videoSource(currSing.video3, currSing.video_name3)}
                        </div>
                        {tzitata(currSing.picture)}
                        <button className={classes.bTnSing} onClick={() => navigate(-1)}>Назад</button>
                        {/* {tzi(currSing.picture)} */}
                    </div>

                </Fragment>
            );
        }, [currSings])
    )
}

export default SingContent