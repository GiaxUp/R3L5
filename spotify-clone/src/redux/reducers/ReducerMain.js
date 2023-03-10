import { ADD_TO_HIPHOP, ADD_TO_POP, ADD_TO_ROCK, START_LOADING_MAIN, STOP_LOADING_MAIN } from "../actions/actions";

const initialState = {
  rockSongs: [],
  popSongs: [],
  hipHopSongs: [],
  loading: false,
};

export const ReducerMain = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_ROCK:
      return {
        ...state,
        rockSongs: [...state.rockSongs, action.payload],
      };
    case ADD_TO_POP:
      return {
        ...state,
        popSongs: [...state.popSongs, action.payload],
      };
    case ADD_TO_HIPHOP:
      return {
        ...state,
        hipHopSongs: [...state.hipHopSongs, action.payload],
      };
    case START_LOADING_MAIN:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING_MAIN:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
