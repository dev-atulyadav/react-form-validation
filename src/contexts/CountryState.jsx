import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CountryContext = createContext();
const CountryState = ({ children }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/almost/7748738/raw/575f851d945e2a9e6859fb2308e95a3697bea115/countries.json"
      )
      .then((response) => {
        // console.log(response.data);
        response.data != undefined && setCountries(response.data);
      })
      .catch((error) => {
        alert("Network error unable to fetch country list!");
        console.log(error);
      });
  }, []);

  return (
    <CountryContext.Provider value={{countries}}>{children}</CountryContext.Provider>
  );
};

export default CountryState;
