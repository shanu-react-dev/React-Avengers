import React, { Fragment } from "react";
import { FaArrowRight } from "react-icons/fa";

const ContentIterator = ({ content }) => {
  console.log(content);
  return (
    <div className="contentArea">
      {content.map((ele, index) => {
        console.log(ele);
        return (
          <div className="regularContent" key={index}>
            {ele.media_src.endsWith(".mp4") ? (
              <>
                <video
                  src={ele.media_src}
                  className="video"
                  autoPlay
                  muted
                  loop
                ></video>
                <div className="regular">
                  <h1>{ele.page_content.heading}</h1>
                  <p>{ele.page_content.description}</p>
                  <button>
                    {ele.page_content.btn_text}{" "}
                    <FaArrowRight className="arrow" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <img src={ele.media_src} className="video" />
                <div className="regular">
                  <h1>{ele.page_content.heading}</h1>
                  <p>{ele.page_content.description}</p>
                  <button>
                    {ele.page_content.btn_text}
                    <FaArrowRight className="arrow" />
                  </button>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ContentIterator;
