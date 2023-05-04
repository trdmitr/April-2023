import {
    SONGS_ARE_LOADED,
    LOADING_SONGS,
    FETCH_DATA_ERROR,
   } from "./Action_types";

const initialState = {
    all_songs : [],
    loading_songs : [],
    fetch_posts : [],
    fetchDataError: []
}

const songs_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SONGS_ARE_LOADED : {
            return {
                ...state,
                all_songs: action.payload
            }
        }
        case LOADING_SONGS : {
            return {
                ...state,
                loading_songs: action.payload
            }
        }
        // case ADD_TO_CART: {
        //     const newItem = state.all_songs.find(
        //       (item) => item.id === action.payload
        //     );
        //     return {
        //       ...state,
        //       cart_products_list: [...state.cart_products_list, newItem],
        //     };
        //   }
          case FETCH_DATA_ERROR : {
            return {
                ...state,
                fetchDataError: action.payload
            }
        }
        default:
            return state;
    }
}

export default songs_reducer;