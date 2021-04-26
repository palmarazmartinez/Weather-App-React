import "./App.css";
import CurrentLocationWeather from "./CurrentLocationWeather";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";


export default function App() {
  return (
    <Container className="container border border-secondary rounded-3">
        <CurrentLocationWeather defaultCity="Chicago" />
      <br />
      <Footer />
    </Container>
  );
}