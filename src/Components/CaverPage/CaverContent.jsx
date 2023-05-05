import React from 'react'
import Img from '../UI/Img';
import { Link } from 'react-router-dom';
import classes from "./CaverPage.module.css"
import { useSelector } from 'react-redux';
const CaverContent = () => {
    const all_songs = useSelector(
        ({ songs_reducer: { all_songs } }) => all_songs
    );
    
    return all_songs.map((song) => {
        const {photo, name, id} = song
        return (
            <Link key={id} to={`/cavers/${id}`}>
                <div className={classes.media}>
                    <div className={classes.mediaImage}>
                        {/* <img src={song.photo} width={100} alt={song.name} /> */}
                        <Img imgUrl={photo} imgAlt={name} />
                    </div>
                    <div>
                        <p> {name} </p>
                    </div>
                </div>
            </Link>
        )

    })
}
export default React.memo(CaverContent)