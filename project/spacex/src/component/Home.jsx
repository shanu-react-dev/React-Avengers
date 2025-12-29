import React from "react";
import secondPage from "../assets/secondPage.mp4";
import thirdPage from "../assets/thirdPage.jpg";
import fourthPage from "../assets/fourthPage.mp4";
import fifthPage from "../assets/fifthPage.jpg";
import sixthPage from "../assets/sixthPage.mp4";
import ContentIterator from "../iterator/ContentIterator";

const Home = () => {
  let content = [
    {
      media_src: secondPage,
      page_content: {
        heading: "Making Life MultiPlanetary",
        description:
          "SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.",
        btn_text: "explore",
      },
    },
    {
      media_src: thirdPage,
      page_content: {
        heading: "Revolutionizing space Technology",
        description:
          "SpaceX’s Starship spacecraft and Super Heavy rocket is a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond.",
        btn_text: "learn more",
      },
    },
    {
      media_src: fourthPage,
      page_content: {
        heading: "World’s leading launch service provider",
        description:
          "SpaceX leads the world in launches with its reliable, reusable rockets and is developing the fully and rapidly reusable rockets necessary to transform humanity’s ability to access space into something as routine as air travel.",
        btn_text: "Reserve your ride",
      },
    },
    {
      media_src: fifthPage,
      page_content: {
        heading: "Advancing human spaceflight",
        description:
          "Since returning human spaceflight capabilities to the United States in 2020, SpaceX is helping build a new era where not just hundreds of people, but thousands and ultimately millions will be able to explore space.",
        btn_text: "Join a mission",
      },
    },
    {
      media_src: sixthPage,
      page_content: {
        heading: "Delivering high-speed internet from space",
        description:
          "Starlink is the world’s most advanced satellite constellation in low-Earth orbit, delivering reliable broadband internet capable of supporting streaming, online gaming, video calls, and more.",
        btn_text: "Order Now",
      },
    },
  ];
  return (
    <>
      <ContentIterator content={content} />
    </>
  );
};

export default Home;
