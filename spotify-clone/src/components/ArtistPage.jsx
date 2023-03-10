import { useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { artistFetch } from "../redux/actions/actions";
import PlayerArtist from "./PlayerArtist";
import NavBar from "./NavBar";

const ArtistPage = () => {
  const params = useParams();
  const artistId = params.id;

  const artist = useSelector((state) => state.artist.artist);
  const track = useSelector((state) => state.artist.artistSongs);
  const loadingArt = useSelector((state) => state.artist.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(artistFetch(artistId));
  }, []);
  return (
    <>
      <NavBar />

      <Row>
        {artist && (
          <Col xs={12} md={10} lg={10} className="mt-5">
            <h2 className="titleMain">{artist.name}</h2>
            <div id="followers">{artist.nb_fan} followers</div>
            <div className="d-flex justify-content-center" id="button-container">
              <button className="btn btn-success mr-2 mainButton d-inline" id="playButton">
                Play
              </button>
              <button className="btn btn-outline-light mainButton d-inline" id="followButton">
                Follow
              </button>
            </div>
          </Col>
        )}
      </Row>
      <Row className="mb-3">
        {loadingArt && <Spinner animation="border" variant="light" />}
        {track && (
          <Col xs={10} className="offset-1 p-0">
            <div className="mt-4 d-flex justify-content-start">
              <h2 className="text-white font-weight-bold">{artist.name}'s songs</h2>
            </div>
            <div className="pt-5 mb-5">
              <div className="row" id="apiLoaded">
                {track.map((song) => (
                  <PlayerArtist key={song.id} song={song} />
                ))}
              </div>
            </div>
          </Col>
        )}
      </Row>
    </>
  );
};
export default ArtistPage;
