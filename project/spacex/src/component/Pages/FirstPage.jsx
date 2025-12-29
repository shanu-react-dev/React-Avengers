import React, { Fragment } from "react";
import firstVideo from "../../assets/firstPage.mp4";
import NavbarContainer from "../Navbar/NavbarContainer";
import firstPage from "../../assets/firstPage.mp4";
import { FaArrowRight } from "react-icons/fa";
import Home from "../Home";

const FirstPage = () => {
  let arr = [
    {
      media_src: firstPage,
      page_content: {
        date: "October 13, 2025",
        heading: "Starship's Eleventh Flight Test",
        btn_text: "Watch",
      },
    },
  ];
  return (
    <div className="myFirstPage">
      <NavbarContainer />
      <div>
        {arr.map((ele, index) => {
          console.log(ele);
          return (
            <Fragment key={index}>
              <video autoPlay loop muted className="video">
                <source src={ele.media_src} type="video/mp4" />
              </video>

              <div className="firstPageContent">
                <span>{ele.page_content.date}</span>
                <h1>{ele.page_content.heading}</h1>
                <button>
                  {ele.page_content.btn_text} <FaArrowRight className="arrow" />
                </button>
              </div>
            </Fragment>
          );
        })}
        <Home />;
      </div>
    </div>
  );
};

export default FirstPage;
