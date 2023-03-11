export const ADD_TO_ROCK = "ADD_TO_ROCK";
export const ADD_TO_POP = "ADD_TO_POP";
export const ADD_TO_HIPHOP = "ADD_TO_HIPHOP";
export const START_LOADING_MAIN = "START_LOADING_MAIN";
export const STOP_LOADING_MAIN = "STOP_LOADING_MAIN";
export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const SAVE_TO_FAV = "SAVE_TO_FAV";
export const REMOVE_FROM_SAVED = "REMOVE_FROM_SAVED";
export const ADD_TO_SEARCH_RESULT = "ADD_TO_SEARCH_RESULT";
export const START_LOADING_SEARCH = "START_LOADING_SEARCH";
export const STOP_LOADING_SEARCH = "STOP_LOADING_SEARCH";
export const ADD_TO_PLAYER = "ADD_TO_PLAYER";
export const ADD_TO_ARTISTSONGS = "ADD_TO_ARTISTSONGS";
export const START_LOADING_ARTIST = "START_LOADING_ARTIST";
export const STOP_LOADING_ARTIST = "STOP_LOADING_ARTIST";
export const ARTIST = "ARTIST";
export const ADD_TO_ALBUM = "ADD_TO_ALBUM";
export const START_LOADING_ALBUM = "START_LOADING_ALBUM";
export const STOP_LOADING_ALBUM = "STOP_LOADING_ALBUM";

//FETCH PRINCIPALE
export const mainFetch = (artistName, TYPE) => {
  return async (dispatch) => {
    dispatch({
      type: START_LOADING_MAIN,
    });
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "a27f074b04mshad1903643b93e46p14f3bejsn48778ff57958",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      });
      if (response.ok) {
        let result = await response.json();
        dispatch({
          type: TYPE,
          payload: result.data[0],
        });
      } else {
        console.log("Fatal error #1!");
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({
        type: STOP_LOADING_MAIN,
      });
    }
  };
};

// FETCH PER LA SEARCHBAR LATERALE
export const searchFetch = (searchQuery) => {
  return async (dispatch) => {
    dispatch({
      type: START_LOADING_SEARCH,
    });
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchQuery, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "a27f074b04mshad1903643b93e46p14f3bejsn48778ff57958",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      });
      if (response.ok) {
        let res = await response.json();
        dispatch({
          type: ADD_TO_SEARCH_RESULT,
          payload: res.data,
        });
      } else {
        console.log("Fatal error #1!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: STOP_LOADING_SEARCH,
      });
    }
  };
};

//FETCH PER GLI ARTISTI
export const artistFetch = (artistId) => {
  return async (dispatch) => {
    dispatch({
      type: START_LOADING_ARTIST,
    });
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistId, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "a27f074b04mshad1903643b93e46p14f3bejsn48778ff57958",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      });

      if (response.ok) {
        let artist = await response.json();

        dispatch({
          type: ARTIST,
          payload: artist,
        });

        let tracksResponse = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist.name, {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "a27f074b04mshad1903643b93e46p14f3bejsn48778ff57958",
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          },
        });

        if (tracksResponse.ok) {
          let tracklist = await tracksResponse.json();

          dispatch({
            type: ADD_TO_ARTISTSONGS,
            payload: tracklist.data,
          });
        }
      } else {
        console.log("Fatal error #2!");
      }
    } catch (exception) {
      console.log(exception);
    } finally {
      dispatch({
        type: STOP_LOADING_ARTIST,
      });
    }
  };
};

// FETCH PER GLI ALBUM
export const albumFetch = (albumId) => {
  return async (dispatch) => {
    dispatch({
      type: START_LOADING_ALBUM,
    });
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "a27f074b04mshad1903643b93e46p14f3bejsn48778ff57958",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      });

      if (response.ok) {
        let album = await response.json();
        dispatch({
          type: ADD_TO_ALBUM,
          payload: album,
        });
      } else {
        console.log("Fatal error #3!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: STOP_LOADING_ALBUM,
      });
    }
  };
};
