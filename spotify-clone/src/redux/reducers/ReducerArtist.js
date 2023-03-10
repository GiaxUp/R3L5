import { ADD_TO_ARTISTSONGS, ARTIST, START_LOADING_ARTIST, STOP_LOADING_ARTIST } from "../actions/actions";

const initialState = {
  artistSongs: [],
  artist: [],
  loading: false,
};

export const ReducerArtist = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_ARTISTSONGS:
      return {
        ...state,
        artistSongs: action.payload,
      };
    case ARTIST:
      return {
        ...state,
        artist: action.payload,
      };
    case START_LOADING_ARTIST:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING_ARTIST:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
