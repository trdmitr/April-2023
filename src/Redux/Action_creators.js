import {
    SONGS_ARE_LOADED,
    LOADING_SONGS,
    FETCH_POSTS,
    FETCH_DATA_ERROR
   } from "./Action_types";
const songs_are_loaded = (payload) => ({type: SONGS_ARE_LOADED, payload})
const loading_songs= (payload) => ({type: LOADING_SONGS, payload})
const fetch_posts = (payload) => ({type: FETCH_POSTS, payload})
const fetchDataError = (error) => ({type: FETCH_DATA_ERROR, payload: { error }})

export {
    songs_are_loaded,
    loading_songs,
    fetch_posts,
    fetchDataError
}
