import React from "react";
import ListIterator from "../../iterator/ListIterator";

const Navlists = () => {
  let arrOfLists = [
    "vehicles",
    "launches",
    "Human spaceflight",
    "rideshare",
    "starlink",
    "starshield",
    "company",
    "shop",
  ];
  return (
    <div className="navlist">
      <ListIterator navlists={arrOfLists} />
    </div>
  );
};

export default Navlists;
