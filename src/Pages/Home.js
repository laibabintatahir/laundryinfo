import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Homecontent from "../components/Header/Homecontent";
import Banner from "../components/banner_lower/CallToAction;";
import AppFeatures from "../components/Features/Features";
import FAQs from "../components/faq/FAQ";

const Home = () => {
  return (
    <div>
      <Header />
      <Homecontent />
      <AppFeatures/>
      <FAQs/>
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
