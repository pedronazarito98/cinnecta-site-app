import React, { Fragment } from "react";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { GlobalStyle } from "../styles/globalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WhatsAppButton } from "../components/WhatsAppButton/WhatsButton";

export default function Layout({ children }) {
  return (
    <Fragment>
      <GlobalStyle />
      <ToastContainer />
      <Navbar />
      <WhatsAppButton />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
