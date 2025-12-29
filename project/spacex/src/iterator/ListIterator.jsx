import React, { Fragment } from "react";

const ListIterator = ({ navlists }) => {
  console.log(navlists);
  return (
    <>
      {navlists.map((ele, index) => {
        return (
          <Fragment key={index}>
            <li>{ele}</li>
          </Fragment>
        );
      })}
    </>
  );
};

export default ListIterator;
