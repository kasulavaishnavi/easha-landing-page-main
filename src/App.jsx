// App.jsx

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Import all components and pages
import Navbar from "./components/Navbar/Navbar";
import OffCanvas from "./components/Off-Canvas/OffCanvas";
import Chatbot from "./components/Chatbot/Chatbot";
import Footer from "./components/Footer/Footer";
import GetInTouch from "./components/GetInTouch/GetInTouch";

import HomeHero from "./components/Website/LandingPage/homehero/Hero";
import Experience from "./components/Website/LandingPage/experience/ExperienceCards";
import HowItWorks from "./components/Website/LandingPage/howitworks/work";
import Testimonials from "./components/Website/LandingPage/testimonials/Testimonials";
import DownloadWay from "./components/Website/LandingPage/DownloadWay/Download";
import Faqs from "./components/Website/LandingPage/faqs/FAQ";

import HeroSection from "./components/Website/DoctorsPage/HeroSection/HeroSection";
import Counter from "./components/Website/DoctorsPage/Counter/Counters";
import ChooseDoctors from "./components/Website/DoctorsPage/Choosedoctors/ChooseDoctor";
import Specialization from "./components/Website/DoctorsPage/specialization/Specialization";
import StepsToBook from "./components/Website/DoctorsPage/StepsToBook/StepsToBook";

import OurServicesMain from "./components/Website/OurServices/ourservices/Ourservices";
import ClinicVisit from "./components/Website/OurServices/clinicvisit/ClinicVisit";
import BookingBetter from "./components/Website/OurServices/BookingBetter/BookingBetter";
import HealthServices from "./components/Website/OurServices/HealthServices/HealthServices";

import FirstSection from "./components/Website/About-Us/FirstSection";
import CountingCards from "./components/Website/About-Us/CountingCards";
import TrustSection from "./components/Website/About-Us/TrustSection";
import Mission from "./components/Website/About-Us/Mission";
import WhatWeDo from "./components/Website/About-Us/WhatWeDo";
import MeetOurDoctor from "./components/Website/About-Us/MeetOurDoctors";
import WhyChooseUs from "./components/Website/About-Us/WhyChooseUs";

import Login from "./Pages/Login/Login";
import Signin from "./Pages/Login/Signin";
import Registration from "./Pages/Login/Registration";
import Forgotpassword from "./Pages/Login/Forgotpassword";
import Createpassword from "./Pages/Login/Createpassword";

import ScrollTop from "./components/ScrollTop";

import TermsAndCondition from "./Pages/Help/TermsAndCondition";
import PrivacyPolicy from "./Pages/Help/PrivacyPolicy";
import Customer from "./Pages/Help/Customer";
import Contact from "./Pages/Help/Contact";
import CancellationAndRefunds from "./Pages/Help/CancellationAndRefunds";

function App() {
  // const location = useLocation();
  // const hideUIForAuthPages = location.pathname === "/login" || location.pathname === "/signin" || location.pathname === "/Registration" || location.pathname === "/forgot-password" || location.pathname === "/create-password";

  return (
    <>
        <ScrollTop />

        <>
          <Navbar />
          <Chatbot />
          <div className="block lg:hidden">
            <OffCanvas />
          </div>
        </>
      

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomeHero />
              <Experience />
              <HowItWorks />
              <Testimonials />
              <DownloadWay />
              <Faqs />
            </>
          }
        />

        <Route
          path="/doctor"
          element={
            <>
              <HeroSection />
              <Counter />
              <ChooseDoctors />
              <Specialization />
              <StepsToBook />
            </>
          }
        />

        <Route
          path="/our-services"
          element={
            <>
              <OurServicesMain />
              <ClinicVisit />
              <BookingBetter />
              <HealthServices />
            </>
          }
        />

        <Route
          path="/about-us"
          element={
            <>
              <FirstSection />
              <CountingCards />
              <TrustSection />
              <Mission />
              <WhatWeDo />
              <MeetOurDoctor />
              <WhyChooseUs />
            </>
          }
        />

        {/* <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/Registration"  element={<Registration />} />
                <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/create-password" element={<Createpassword />} /> */}
<Route path="/faq" element={<Faqs />} />
<Route path="/terms-and-conditions" element={<TermsAndCondition />} />
<Route path="/privacypolicy" element={<PrivacyPolicy />} />
<Route path="/customerSupport" element={<Customer />} />
<Route path="/Contact-Us" element={<Contact />} />
<Route path="/cancellation-and-refunds" element={<CancellationAndRefunds />} />
      </Routes>

        <>
          <GetInTouch />
          <Footer />
        </>
    </>
  );
}

export default App;
