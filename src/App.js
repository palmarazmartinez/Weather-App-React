import "./App.css";
import SearchForm from "./SearchForm";
import WeatherAppMain from "./WeatherAppMain";
import TodaysDate from "./TodaysDate";
import CurrentLocation from "./CurrentLocation";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App() {
    return ( <Container className = "container border border-secondary rounded-3" >
        <Row className = "row" >
        <Col className = "col" >
        <TodaysDate / >
          </Col>
        <Col className = "col-sm-8" >
        <SearchForm / >
        <h2 className = "dailyWeatherHeading" > The Next Six Days </h2> 
        </Col> 
      </Row>
      <Row className = "row" id="rowDesign">
        <CurrentLocation />
        <Col className = "col text-center column2" id = "sixDaysWeather">
        <WeatherAppMain />
        </Col> 
      </Row>
      <br />
        <Footer />
        </Container>
    );
}