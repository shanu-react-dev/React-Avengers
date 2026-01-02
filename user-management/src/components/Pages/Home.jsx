import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

const Home = () => {
  const [data, setdata] = useState(null);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/users");
    setdata(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data?.map((ele, index) => (
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
              <button
                onClick={async () => {
                  await axios.delete(`http://localhost:5000/users/${ele.id}`);
                  fetchData();
                }}
              >
                Delete Profile
              </button>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default Home;
