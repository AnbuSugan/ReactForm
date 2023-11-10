import React, { useState } from "react";

const Useform = (validate) => {
  const [values, setValues] = useState({
    date: "",
    compaignTitle: "",
    mediaOptions: "",
    lengthBox: "",
    voiceTalentBox: "",
    specialText: "",
    spotOption: "",
    spotTextarea: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    verification: "",
  });
  const [errors, setErrors] = useState({});
  const handlechange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
  };
  return { handlechange, values, handleSubmit, errors };
};

export default Useform;
