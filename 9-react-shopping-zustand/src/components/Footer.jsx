import React from "react";
import Container from "./Container";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className=" mt-auto mb-5" >
      <Container>
        <div className=" bg-black text-white text-center py-2">
          ©{currentYear}{" "}
          <a href="http:/mms-it.com" className=" text-gray-400 underline">
            MMS IT
          </a>
          . All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
