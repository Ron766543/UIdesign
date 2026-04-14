import React from "react";
import Navbar from "../Components/Navbar";
import Leftsidebar from "../Components/Leftsidebar";
import Maincontent from "../Components/Maincontent";
import "../App/Layout.css";

const Layout = (cards) => {
  return (
    <div className="layout" id="right">
      <header>
        <Navbar />
      </header>
      <section>
        <div className="leftside">
          <Leftsidebar />
        </div>
        <div className="rightside">
          <Maincontent cards={cards} />
        </div>
      </section>
    </div>
  );
};

export default Layout;
