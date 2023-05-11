import { useEffect } from "react";
import Papa from "papaparse";
import { useDispatch } from 'react-redux';
import { loading_songs, fetchDataError, songs_are_loaded} from "../../Redux/Action_creators";
const useFetch = (url, options) => {
  const dispatch = useDispatch();
  // const [status, setStatus] = useState({
  //   loading: false,
  //   data: [],
  //   error: ""
  // });
  // const timeOut = (t) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(`Completed in ${t}`)
  //     }, t)
  //   })
  // }
  function fetchNow(url) {
    // setStatus({ loading: true });
    dispatch(loading_songs(true))
    // fetch(url, options)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setStatus({ loading: false, data: res.data });
    //   })
    //   .catch((error) => {
    //     setStatus({ loading: false, error });
    //   });
    Papa.parse(url,
        {
         download: true,
         header: true,
         complete: (results) => {
            // setStatus({ loading: false, data: results.data })
            // timeOut(5000)
            dispatch(songs_are_loaded(results.data))
            
            dispatch(loading_songs(false))
         },
         skipEmptyLines: true,
         error: (error) => {
           console.error(error);
          //  setStatus({ loading: false, error });
           dispatch(loading_songs(false))
           dispatch(fetchDataError("error"))
       }
       })
  }
  useEffect(() => {
    if (url) {
      fetchNow(url);
    }
  }, []);
  return { fetchNow };
}

export default useFetch