import React from "react";
import "./SearchForm.css";
import pin from "./images/pin.png";
import { Form, Button } from "react-bootstrap";

export default function SearchForm() {
  return (
    <div className="searchForm">
      <Form id="search-location">
        <Button
          type="button"
          className="btn btn-outline-light btn-sm"
          id="exact-location-btn"
        >
          <img src={pin} alt="blue-drop-pin" className="blueDropPin" />
        </Button>{" "}
        <input
          type="search"
          className="form-control-sm text-center border-info"
          id="location-input"
          placeholder="FIND A LOCATION"
          autocomplete="off"
        />{" "}
        <input
          type="submit"
          className="search-btn btn-outline-light btn-sm"
          value="🔍"
        />
      </Form>
    </div>
  );
}