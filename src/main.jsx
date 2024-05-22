import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FormState from "./contexts/FormState.jsx";
import CountryState from "./contexts/CountryState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <CountryState>
      <FormState>
        <App />
      </FormState>
    </CountryState>
);
