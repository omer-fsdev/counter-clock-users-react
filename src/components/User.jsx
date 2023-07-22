import React, { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);
  // console.log(user)

  return (
    <div className="container">
      <div className="row">
        <h3 className="text-center mt-3 border rounded text-primary">Users</h3>
        {user.map(({ id, username, address, company, name }) => {
          return (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-2 mx-lg-5"
              key={id}
            >
              <img
                src={`https://api.dicebear.com/6.x/personas/svg?seed=${name}&radius=50&mouth=bigSmile,smile,lips,smirk`}
                alt="avatar"
              />
              <div className="d-flex flex-column align-items-center">
                <p className="display-6 fst-italic">{username}</p>
                <p>🌎 {address.city}</p>
                <p>🏢 {company.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default User;
