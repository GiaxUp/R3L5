import { useSelector } from "react-redux";
import AlbumCardRow from "./AlbumCardRow";

const YourLibrary = () => {
  const savedSongs = useSelector((state) => state.fav.savedFavSongs);
  return (
    <>
      <div className="favouriteSongs">
        {savedSongs.length > 0 ? (
          <AlbumCardRow title="Your favourite songs" songs={savedSongs} />
        ) : (
          <>
            <h1>You don't have any saved song yet!</h1>
            <h4>Click the hearth next to one you like!</h4>
          </>
        )}
      </div>
    </>
  );
};
export default YourLibrary;
