import React from "react";
import Header from "./Components/Header/header";
import TopPart from "./Components/Top-section/TopPart";
import RecPlaces from "./Components/Rec-places/RecPlaces";
import CulturePage from "./Components/Culture-page/CulturePage";
import StoriesSection from "./Components/Stories-section/StoriesSection";

import "./App.css";
import VisitorForm from "./Components/Visitor-Form/VisitorForm";
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <TopPart />
      <RecPlaces />
      <CulturePage />
      <StoriesSection />
      <Blogs />
      <VisitorForm />
      <Footer />
    </div>
  );
}

export default App;
