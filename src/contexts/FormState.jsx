import React, { createContext, useContext, useState } from "react";
import { CountryContext } from "./CountryState";

export const FormContext = createContext();
const FormState = ({ children }) => {
  const {countries} = useContext(CountryContext);
  console.log(countries);
  const [isVisible, setIsVisible] = useState(false);
  const handlePasswordVisibility = (e) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };
  console.log(isVisible);
  const [inputs] = useState([
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "First name",
      label: "First name",
      errorMessage: "Please enter your first name",
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Last name",
      label: "Last name",
      errorMessage: "Please enter your last last name",
    },
    {
      id: 3,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage:
        "Username between 3-16 characters with no spaces or special characters",
      pattern: "^[a-zA-Z0-9]{3,16}$",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage: "Please enter your password",
      isPasswordInput: true,
    },
    {
      id: 5,
      name: "phone number",
      type: "tel",
      placeholder: "Phone number",
      label: "Phone number",
      errorMessage: "Please enter your phone number",
    },
    {
      id: 6,
      name: "country",
      type: "text",
      placeholder: "Country",
      label: "Country",
      errorMessage: "Please enter your country name",
    },
    {
      id: 7,
      name: "city",
      type: "text",
      placeholder: "City",
      label: "City",
      errorMessage: "Please enter your city",
    },
    {
      id: 8,
      name: "pan number",
      type: "text",
      placeholder: "Pan card number",
      label: "Pan number",
      errorMessage: "Please enter your valid pan number",
    },
    {
      id: 9,
      name: "Aadhar number",
      type: "text",
      placeholder: "Aadhar card number",
      label: "Aadhar number",
      errorMessage: "Please enter your Aadhar card number",
    },
  ]);
  return (
    <FormContext.Provider
      value={{ inputs, isVisible, handlePasswordVisibility }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormState;
