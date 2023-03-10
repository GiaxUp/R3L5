import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_TO_FAV, ADD_TO_PLAYER, REMOVE_FROM_FAV, REMOVE_FROM_SAVED, SAVE_TO_FAV } from "../redux/actions/actions";

const PlayerArtist = ({ song }) => {
  const dispatch = useDispatch();
  const favSongs = useSelector((state) => state.fav.favSongs);
  return (
    <>
      <Col className="col-sm-auto text-center mb-5 position-relative myCardSongs">
        <img
          variant="top"
          className="img-fluid"
          src={song.album.cover_medium}
          onClick={() => dispatch({ type: ADD_TO_PLAYER, payload: song })}
          alt="ciao"
        />
        <span className="myPlayIcon" onClick={() => dispatch({ type: ADD_TO_PLAYER, payload: song })}>
          <i className="far fa-play-circle"></i>
        </span>

        <div>
          <Link to={`/`} className="text-decoration-none">
            <p className="m-0 ">{song.title}</p>
          </Link>

          <p className="d-flex justify-content-center align-items-center">
            <Link to={`/album/${song.album.id}`} className="text-decoration-none">
              Album: {song.album.title.length < 16 ? song.album.title : `${song.album.title.substring(0, 16)}...`}
            </Link>
            <button
              className="addToFav"
              onClick={() =>
                favSongs?.includes(song.id)
                  ? (dispatch({ type: REMOVE_FROM_FAV, payload: song.id }),
                    dispatch({ type: REMOVE_FROM_SAVED, payload: song.id }),
                    (document.getElementById(`fav-${song.id}`).innerHTML = '<i class="far fa-heart"></i>'),
                    (document.getElementById(`fav-${song.id}`).style.color = "white"))
                  : (dispatch({ type: ADD_TO_FAV, payload: song.id }),
                    dispatch({ type: SAVE_TO_FAV, payload: song }),
                    (document.getElementById(`fav-${song.id}`).innerHTML =
                      '<i class="fas fa-heart" style="color: green"></i>'))
              }
              style={{ color: favSongs?.includes(song.id) ? "green" : "white" }}>
              <span id={`fav-${song.id}`}>
                {favSongs?.includes(song.id) ? (
                  <i className="fas fa-heart" style={{ color: "green" }}></i>
                ) : (
                  <i className="far fa-heart"></i>
                )}
              </span>
            </button>
          </p>
        </div>
      </Col>
    </>
  );
};
export default PlayerArtist;
