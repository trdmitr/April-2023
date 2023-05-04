import Papa from "papaparse";


export const FETCH_POSTS = "fetch_posts";
// export const FETCH_POST = "fetch_post";

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

//   export function fetchPost(id) {
//     const songs = [];
    
//     const song =  Papa.parse(url,
//         {
//          download: true,
//          header: true,
//          complete: (results) => {
//             // setStatus({ loading: false, data: results.data })
//             songs.push(results.data);
//          },
//          skipEmptyLines: true,
//          error: (error) => {
//            console.error(error);
//         //    setStatus({ loading: false, error });
//        }
//        })
//        const request = song.filter(song => song === {id})
//     return {
//       type: FETCH_POST,
//       payload: request
//     };
//   }