import Papa from "papaparse";
import { fetchDataRequest, fetchDataSuccess, fetchDataError } from "./Action_creators";
import { useDispatch, useSelector } from "react-redux";
export function fetchSongs() {
    // const dispatch = useDispatch();
  return dispatch => {
    dispatch(fetchDataError);
    Papa
      .parse(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQbZ-zv6Iw7YB8B8IYyayLqLPyJYxdBl9tJoNB93wUb6_FmCntCAoiHEWmPo8Ohpg4LjZCLhU68a3no/pub?output=csv",
       { download: true,
        header: true,
        complete: (results) => {
            dispatch(fetchDataSuccess(results.data))
            console.log("fetchDataSuccess1", fetchDataSuccess)
        },
        skipEmptyLines: true,
        error: (error) => {
            console.error(error);
            dispatch(fetchDataError(error));
        }
    })
      
      .catch(error => {
        dispatch(fetchDataError(error));
      });
  };
}
