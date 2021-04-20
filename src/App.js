import "./App.css";
import WeatherAppDaily from "./WeatherAppDaily";
import CurrentLocation from "./CurrentLocation";
import Footer from "./Footer";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App() {
  return (
    <Container className="container border border-secondary rounded-3">
      <Row className="row" id="rowDesign">
        <CurrentLocation defaultCity="Chicago" />
        <Col className="col text-center column2" id="sixDaysWeather">
          <WeatherAppDaily />
        </Col>
  
      </Row>
      <br />
      <Footer />
    </Container>
  );
}