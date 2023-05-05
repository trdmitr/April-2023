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
        return (
            <Link key={song.id} to={`/cavers/${song.id}`}>
                <div className={classes.media}>
                    <div className={classes.mediaImage}>
                        {/* <img src={song.photo} width={100} alt={song.name} /> */}
                        <Img imgUrl={song.photo} imgAlt={song.name} />
                    </div>
                    <div>
                        <p> {song.name} </p>
                    </div>
                </div>
            </Link>
        )

    })
}
export default React.memo(CaverContent)