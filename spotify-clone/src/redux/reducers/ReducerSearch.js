import { ADD_TO_SEARCH_RESULT, START_LOADING_SEARCH, STOP_LOADING_SEARCH } from "../actions/actions";

const initialState = {
  searchResult: [],
  loading: false,
};

export const ReducerSearch = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload,
      };
    case START_LOADING_SEARCH:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING_SEARCH:
      return {
        ...state,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
