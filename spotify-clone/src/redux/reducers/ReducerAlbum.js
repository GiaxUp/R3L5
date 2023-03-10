import { ADD_TO_ALBUM, START_LOADING_ALBUM, STOP_LOADING_ALBUM } from "../actions/actions";

const initialState = {
  albumSongs: [],
  loading: false,
};

export const ReducerAlbum = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_ALBUM:
      return {
        ...state,
        albumSongs: action.payload,
      };
    case START_LOADING_ALBUM:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING_ALBUM:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
