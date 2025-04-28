import "./App.css";
import styled from "styled-components";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Home from "./components/home/home.jsx";
import BrandDNA from "./components/brand-dna/brand-dna.jsx";
import Logo from "./components/logo/logo.jsx";
import Colors from "./components/colors/colors.jsx";
import Designguide from "./components/designguide/designguide.jsx";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "DM Sans", sans-serif;
  background-color: #fbfbfb;
`;

const ContentWrapper = styled.div`
  margin-left: 250px;
  padding: 1rem 2rem;
  flex-grow: 1;
  max-width: 900px;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-grow: 1;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Updating favicon based on theme

(function () {
  const darkmodeIcon =
    "https://cdn.prod.website-files.com/63cf97b6a9ebdc5f745cff2f/680a21178b7b6c75d13cf079_8622e6fb9f12b4d74ecc31317c32511f_fav-icon_dark-mode.png";
  const matcher = window.matchMedia("(prefers-color-scheme: dark)");

  const origLink = document.querySelector(
    "link[rel='icon'], link[rel='shortcut icon']"
  );
  const lightHref = origLink ? origLink.href : "";
  const lightType = origLink ? origLink.type : "image/png";

  function updateFavicon() {
    const href = matcher.matches ? darkmodeIcon : lightHref;
    const type = matcher.matches ? "image/png" : lightType;

    document
      .querySelectorAll("link[rel='icon'], link[rel='shortcut icon']")
      .forEach((el) => el.remove());

    const link = document.createElement("link");
    link.rel = "icon";
    link.type = type;
    link.href = href;
    document.head.appendChild(link);
  }

  matcher.addEventListener("change", updateFavicon);
  if (matcher.matches) updateFavicon();
})();

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <PageWrapper>
          <Sidebar />
          <ContentWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/brand-dna" element={<BrandDNA />} />
              <Route path="/logo" element={<Logo />} />
              <Route path="/colors" element={<Colors />} />
              <Route path="/designguide" element={<Designguide />} />
            </Routes>
          </ContentWrapper>
        </PageWrapper>
        <Footer />
      </AppWrapper>
    </Router>
  );
};

export default App;
