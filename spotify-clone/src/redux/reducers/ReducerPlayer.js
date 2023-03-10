import { ADD_TO_PLAYER } from "../actions/actions";

const initialState = {
  songInPlay: [],
};

export const ReducerPlayer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYER:
      return {
        ...state,
        songInPlay: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
