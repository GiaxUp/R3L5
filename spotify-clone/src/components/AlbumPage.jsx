import { useEffect } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  ADD_TO_FAV,
  ADD_TO_PLAYER,
  albumFetch,
  REMOVE_FROM_FAV,
  REMOVE_FROM_SAVED,
  SAVE_TO_FAV,
} from "../redux/actions/actions";
import NavBar from "./NavBar";

const AlbumPage = () => {
  const params = useParams();
  const albumId = params.id;

  const dispatch = useDispatch();
  const favSongs = useSelector((state) => state.fav.favSongs);
  const album = useSelector((state) => state.album.albumSongs);
  const loadingAlbum = useSelector((state) => state.album.loading);

  useEffect(() => {
    dispatch(albumFetch(albumId));
  }, []);
  return (
    <>
      <NavBar />
      <Row>
        <Col md={3} className=" pt-5 text-center" id="img-container">
          {album.title && (
            <>
              <img src={album.cover} className="card-img img-fluid" alt="Album" />
              <div className="mt-4 text-center">
                <p className="album-title">{album.title}</p>
              </div>
              <div className="text-center">
                <p className="artist-name">{album.artist.name}</p>
              </div>
              <div className="mt-4 text-center">
                <button id="btnPlay" className="btn btn-success" type="button">
                  Play
                </button>
              </div>
            </>
          )}
        </Col>
        <Col md={8} className="p-5">
          <Row>
            <Col md={10} className="mb-5 w-100" id="trackList">
              {loadingAlbum && <Spinner animation="border" variant="light" />}
              {album.title &&
                album.tracks.data.map((track) => (
                  <Row key={track.id} className="justify-content-center w-100">
                    <Col xs={2} className="pe-0">
                      <button
                        className="addToFav"
                        onClick={() => {
                          if (favSongs?.includes(track.id)) {
                            dispatch({ type: REMOVE_FROM_FAV, payload: track.id });
                            dispatch({ type: REMOVE_FROM_SAVED, payload: track.id });
                            document.getElementById(`fav-${track.id}`).innerHTML = '<i class="far fa-heart"></i>';
                            document.getElementById(`fav-${track.id}`).style.color = "white";
                          } else {
                            dispatch({ type: ADD_TO_FAV, payload: track.id });
                            dispatch({ type: SAVE_TO_FAV, payload: track });
                            document.getElementById(`fav-${track.id}`).innerHTML =
                              '<i class="fas fa-heart" style="color: green"></i>';
                          }
                        }}>
                        <span id={`fav-${track.id}`}>
                          {favSongs?.includes(track.id) ? (
                            <i className="fas fa-heart" style={{ color: "green" }}></i>
                          ) : (
                            <i className="far fa-heart"></i>
                          )}
                        </span>
                      </button>

                      <button className="addToFav" onClick={() => dispatch({ type: ADD_TO_PLAYER, payload: track })}>
                        <i className="far fa-play-circle"></i>
                      </button>
                    </Col>
                    <Col xs={10} className="ps-0 ">
                      <div className="py-3 trackHover">
                        <Link to="/" className="card-title trackHover px-3" style={{ color: "white" }}>
                          {track.title}
                        </Link>

                        <small className="duration" style={{ color: "white" }}>
                          {Math.floor(parseInt(track.duration) / 60)}:
                          {parseInt(track.duration) % 60 < 10
                            ? "0" + (parseInt(track.duration) % 60)
                            : parseInt(track.duration) % 60}
                        </small>
                      </div>
                    </Col>
                  </Row>
                ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default AlbumPage;
