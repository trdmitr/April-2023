import React, {Fragment} from 'react'
import { useParams } from "react-router";
import classes from "../components.module.css"
import { useNavigate } from 'react-router-dom'
import { audioSource, tzitata, videoSource } from '../Hooks/utils';
import { useSelector } from 'react-redux';
const SingContent = () => {
    const navigate = useNavigate();
    const params = useParams();
      const currSings = useSelector(
        ({ songs_reducer: { all_songs } }) => all_songs.filter(results => results.id === params.id)
      );
    //   console.log("ALL_PROD", currSings)

    return (
             currSings.map((currSing) => {
             const {id, photo, name, linkTo, audio1, audio_name1, audio2, audio_name2, 
                audio3, audio_name3, video1, video_name1, video2, video_name2, 
                video3, video_name3, picture  } = currSing
               return (
               <Fragment key={id}>
                    <div className={classes.mediaSong} >
                        <img className={classes.mediaImage_modal} src={photo} width={80} alt={name} />
                        <div className={classes.headerSong}>
                            <p>{name}</p></div>
                        <a className={[classes.linkTo, linkTo ? '' : classes.mediaHidden].join(' ')} href={linkTo}
                         target="_blank" rel="noopener noreferrer"> Канал исполнителя </a>
                        <div className=
                            {
                                classes.audioBlock
                            }>
                            {audioSource(audio1, audio_name1)}
                            {audioSource(audio2, audio_name2)}
                            {audioSource(audio3, audio_name3)}
                            {/* {audioSource(currSing.rezAudio2, currSing.rezAudio1)} */}
                        </div>
                        <div className={classes.videoBlock}
                        // {
                        //   [classes.videoBlock, currSing.video1 ? '' : classes.mediaHidden].join(' ')
                        >
                            {videoSource(video1, video_name1)}
                            {videoSource(video2, video_name2)}
                            {videoSource(video3, video_name3)}
                        </div>
                        {tzitata(picture)}
                        <button className={classes.bTnSing} onClick={() => navigate(-1)}>Назад</button>
                        {/* {tzi(currSing.picture)} */}
                    </div>

                    </Fragment>
             )}
            )
    )
}

export default React.memo(SingContent) 