import React from "react";
import ReactWhatsappButton from "react-whatsapp-button";

const Whatsapp = () => {
  return (
    <div className="App">
      <ReactWhatsappButton countryCode="355" phoneNumber="692973373" animated />
    </div>
  );
};

export default Whatsapp;
