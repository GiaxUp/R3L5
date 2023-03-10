import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import AlbumPage from "./components/AlbumPage";
import ArtistPage from "./components/ArtistPage";
import Home from "./components/Home";
import Player from "./components/Player";
import SideBar from "./components/SideBar";
import YourLibrary from "./components/YourLibrary";

function App() {
  return (
    <>
      <Container>
        <BrowserRouter>
          <Row>
            <Col xs={2}>
              <SideBar />
            </Col>
            <Col xs={12} md={9} className="mainPage offset-md-3 mb-5">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/artist/:id" element={<ArtistPage />} />
                <Route path="/album/:id" element={<AlbumPage />} />
                <Route path="/yourLibrary" element={<YourLibrary />} />
              </Routes>
            </Col>
          </Row>
          <Player />
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
