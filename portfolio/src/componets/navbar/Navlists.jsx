import React from "react";
import ListIterator from "../../iterators/ListIterator";

const Navlists = () => {
  let navlist = ["home", "about", "projects", "contact us"];
  return (
    <div className="navlist">
      <ListIterator data={navlist} />
    </div>
  );
};

export default Navlists;
