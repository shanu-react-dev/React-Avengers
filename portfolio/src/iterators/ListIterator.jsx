import React, { Fragment } from "react";

const ListIterator = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map((ele, index) => {
        return (
          <Fragment key={index}>
            <li>
              <a href="">{ele}</a>
            </li>
          </Fragment>
        );
      })}
    </>
  );
};

export default ListIterator;
