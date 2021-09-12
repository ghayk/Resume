import React from "react";
import "./App.css";
import "./css/main.css";
// import "./css/animations.css";
import "./css/bootstrap-grid.min.css";
import "./css/magnific-popup.css";
import "./css/owl.carousel.css";
import "./css/perfect-scrollbar.css";
import Header from "./components/header/Header";
import MenuToggle from "./components/menuToggle/MenuToggle";
import ArrowNav from "./components/arrowNav/ArrowNav";
import Content from "./components/content/Content";

function App() {
  return (
    <div className="page">
      <div className="page-content">
        <Header />
        <MenuToggle />
        <ArrowNav />
        <Content />
      </div>
    </div>
  );
}

export default App;
