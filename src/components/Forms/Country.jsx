import React, { useContext } from "react";
import { CountryContext } from "../../contexts/CountryState";

const Country = () => {
  const { countries } = useContext(CountryContext);
  return (
    <>
      <input
        className="px-3 py-2 rounded-lg shadow-lg border border-transparent focus:border-black outline-none"
        list="countries"
        name="country"
        id="country"
        placeholder="Enter your country"
      />
      <datalist id="countries">
        {countries.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </datalist>
    </>
  );
};

export default Country;
