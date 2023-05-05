import React from 'react';
import { Fragment } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import { HomePage } from './Components/HomePage/HomePage';
import { CaverPage } from './Components/CaverPage/CaverPage';
import SinglPage from './Components/SingContent/SinglPage';
import useFetch from './Components/API/useFetch';
import { useSelector } from 'react-redux';
import {store} from "./Redux/store"
function NotFound() {
  let location = useLocation();
  return (
    <div>
      <h3>
        Страница <code>{location.pathname}</code> не найдена!
      </h3>
      <Link to = "/">На главную</Link>
    </div>
  );
}
function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchSongs());
    
  // }, []);
  const urlParse = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTr20C0VPXynKYsXxAjVWKdFX1icr_6NO-9sd9UmAbrtnYYNtD23fMB83dviQwF6F8-z4M225GEBaCX/pub?output=csv";
  // const { data, loading, error } = 
  useFetch(urlParse)
  const loading_songs = useSelector(
    ({ songs_reducer: { loading_songs } }) => loading_songs
  );
  // const fetchDataError = useSelector(
  //   ({ songs_reducer: { fetchDataError } }) => fetchDataError
  // );
  // if (fetchDataError) {
  //   return alert(`Ошибка загрузки! ${fetchDataError.message}`) 
    
  // }
  if(loading_songs) return null
  
  // console.log("data", data )
  // const handler = 
 
  // dispatch(songs_are_loaded(data));
  // dispatch(fetchDataError(error))
  // dispatch(fetchDataSuccess(loading))
  const navigatorState = store.getState()
  console.log("store", navigatorState);
  return (
    <div className="App">
      <Fragment>
       <Router>
          <Routes>
         <Route exact path="/" element={<HomePage/>} />
         <Route path="/cavers" element={<CaverPage/>} />
         <Route path="/cavers/:id" element={<SinglPage />} /> 
         <Route path="*" element={<NotFound />} />
       </Routes>
       </Router>
   </Fragment>
    </div>
  );
}

export default App;
