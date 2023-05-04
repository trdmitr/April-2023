import {
    SONGS_ARE_LOADED,
    LOADING_SONGS,
    FETCH_POSTS,
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_ERROR
   } from "./Action_types";
   import Papa from "papaparse";
const songs_are_loaded = (payload) => ({type: SONGS_ARE_LOADED, payload})
const loading_songs= (payload) => ({type: LOADING_SONGS, payload})
const fetch_posts = (payload) => ({type: FETCH_POSTS, payload})
const fetchDataRequest = (payload) => ({type: FETCH_DATA_REQUEST, payload})
const fetchDataSuccess = (item) => ({type:  FETCH_DATA_SUCCESS, item})
const fetchDataError = (error) => ({type: FETCH_DATA_ERROR, payload: { error }})

export {
    songs_are_loaded,
    loading_songs,
    fetch_posts,
    fetchDataError,
    fetchDataSuccess,
    fetchDataRequest
}

const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTr20C0VPXynKYsXxAjVWKdFX1icr_6NO-9sd9UmAbrtnYYNtD23fMB83dviQwF6F8-z4M225GEBaCX/pub?output=csv";

export function fetchPosts() {
    const songs = [];
    const request =  Papa.parse(url,
        {
         download: true,
         header: true,
         complete: (results) => {
            // setStatus({ loading: false, data: results.data })
            songs.push(results.data);
         },
         skipEmptyLines: true,
         error: (error) => {
           console.error(error);
        //    setStatus({ loading: false, error });
       }
       })
  
    return {
      type: FETCH_POSTS,
      payload: request
    };
  }