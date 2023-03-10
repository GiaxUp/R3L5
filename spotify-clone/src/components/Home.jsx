import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_HIPHOP, ADD_TO_POP, ADD_TO_ROCK, mainFetch } from "../redux/actions/actions";
import AlbumCardRow from "./AlbumCardRow";
import NavBar from "./NavBar";

const rockArtists = ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"];
const popArtists = ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"];
const hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

const Home = () => {
  const dispatch = useDispatch();
  const rockSongs = useSelector((state) => state.mainSongs.rockSongs);
  const popSongs = useSelector((state) => state.mainSongs.popSongs);
  const hipHopSongs = useSelector((state) => state.mainSongs.hipHopSongs);
  const searchedSongs = useSelector((state) => state.search.searchResult);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rockData = await fetchDataFromArtists(rockArtists, ADD_TO_ROCK);
        const popData = await fetchDataFromArtists(popArtists, ADD_TO_POP);
        const hipHopData = await fetchDataFromArtists(hipHopArtists, ADD_TO_HIPHOP);

        dispatch(rockData);
        dispatch(popData);
        dispatch(hipHopData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const fetchDataFromArtists = async (artists, actionType) => {
    const promises = artists.map((artist) => dispatch(mainFetch(artist, actionType)));
    const data = await Promise.all(promises);
    return data.flat();
  };

  return (
    <>
      <NavBar />
      {searchedSongs.length > 0 && <AlbumCardRow title="Search" songs={searchedSongs} id="rock" />}
      <AlbumCardRow title="Rock Classics" songs={rockSongs} id="rock" />
      <AlbumCardRow title="Pop Culture" songs={popSongs} id="pop" />
      <AlbumCardRow title="#HipHop" songs={hipHopSongs} id="hiphop" />
    </>
  );
};

export default Home;
