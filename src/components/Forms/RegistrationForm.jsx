import React, { useContext } from "react";
import { FormContext } from "../../contexts/FormState";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import Country from "./Country";

const RegistrationForm = () => {
  const { inputs, isVisible, handlePasswordVisibility } =
    useContext(FormContext);

  return (
    <div className="bg-slate-100 shadow-lg rounded-xl flex justify-center items-center flex-col p-6">
      <h1 className="text-3xl self-start">React Form</h1>
      <form className="grid grid-cols-3 p-4 gap-4">
        {inputs.map((input, index) => (
          <div
            className="relative flex flex-col justify-center items-start"
            key={index}
          >
            <label
              className="w-full relative flex justify-start items-center gap-1 ml-1"
              htmlFor={input.name}
            >
              {input.label}
              <button className="text-[12px] mt-1 flex justify-start items-center gap-1 ">
                <FiInfo />
              </button>
              {/* <p className="absolute text-xs -right-5 -top-4">
                {input.errorMessage}
              </p> */}
            </label>
          { input.name!=="country" ?<input
              className="px-3 py-2 rounded-lg shadow-lg border border-transparent focus:border-black outline-none"
              type={
                input.type == "password"
                  ? isVisible
                    ? "text"
                    : "password"
                  : input.type
              }
              id={input.name}
              placeholder={input.placeholder}
              required
            />:
            <Country/>}
            {input.isPasswordInput !== undefined && (
              <button
                className="absolute right-2 bottom-3"
                onClick={handlePasswordVisibility}
              >
                {isVisible ? <FaEye /> : <FaEyeSlash />}
              </button>
            )}
          </div>
        ))}
      </form>
      <button
        className="px-6 py-2 bg-green-400 rounded-lg text-white shadow-lg"
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};

export default RegistrationForm;
