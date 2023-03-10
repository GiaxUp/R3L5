import { ReducerAlbum } from "../reducers/ReducerAlbum";
import { ReducerArtist } from "../reducers/ReducerArtist";
import { ReducerFavourites } from "../reducers/ReducerFavourites";
import { ReducerMain } from "../reducers/ReducerMain";
import { ReducerPlayer } from "../reducers/ReducerPlayer";
import { ReducerSearch } from "../reducers/ReducerSearch";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";

const configurePers = {
  key: "root",
  storage,
  blacklist: ["mainSongs", "search"],
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_LOCAL_STORAGE_KEY,
      onError: (error) => {
        console.log(error);
      },
    }),
  ],
};

const Reducers = combineReducers({
  mainSongs: ReducerMain,
  fav: ReducerFavourites,
  search: ReducerSearch,
  player: ReducerPlayer,
  artist: ReducerArtist,
  album: ReducerAlbum,
});
const persReducer = persistReducer(configurePers, Reducers);

export const store = configureStore({
  reducer: persReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
