import React, { Fragment } from "react";

const Child = ({ userData }) => {
  console.log(userData);
  return (
    <div>
      <table border={2}>
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Name</th>
            <th>Image</th>
            <th>Github</th>
          </tr>
        </thead>

        <tbody>
          {userData.map((a, b) => {
            return (
              <Fragment key={b}>
                <tr>
                  <td>{a.id}</td>
                  <td>{a.login}</td>
                  <td>
                    <img
                      src={a.avatar_url}
                      alt=""
                      height="100px"
                      width="100px"
                    />
                  </td>
                  <td>
                    <a href={a.html_url}>visit github</a>
                  </td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Child;
