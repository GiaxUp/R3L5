import { Col, Row } from "react-bootstrap";
import AlbumCard from "./AlbumCard";

const AlbumCardRow = ({ id, title, songs }) => {
  const showAllSongs = title === "Search" || title === "Your Liked Songs";

  return (
    <Row id={id} className="mb-5">
      <Col xs={10}>
        <h2>{title}</h2>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
          {songs.slice(0, showAllSongs ? songs.length : 4).map((song) => (
            <AlbumCard key={song.id} song={song} />
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default AlbumCardRow;
