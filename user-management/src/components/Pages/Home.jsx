import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

const Home = () => {
  let [data, setdata] = useState(null);
  async function fetchData() {
    let data = await axios.get("http://localhost:5000/users");
    setdata(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data?.data);
  return (
    <div>
      {data?.data?.map((ele, index) => {
        return (
          <Fragment key={index}>
            <div className="card">
              <div className="imageSection">
                <img src={ele.imgUrl} alt={ele.firstName} />
              </div>
              <div className="details">
                <h4>{ele.firstName}</h4>
                <p>{ele.contact}</p>
                <p>{ele.gender}</p>
                <p>{ele.age}</p>

                <button>Edit Profile</button>
                <button>Delete Profile</button>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Home;
