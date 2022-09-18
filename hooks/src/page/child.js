import { memo } from "react";

const Child = ({ user, age, tellMe }) => {
  console.log("Children Component has been rendered too");

  return (
    <div style={{ border: "2px solid powderblue", padding: "10px" }}>
      <h3>Children</h3>
      <p>name: {user.name}</p>
      <p>age: {age}</p>
      <button onClick={tellMe}>Mom, Are you there?</button>
    </div>
  );
};

export default memo(Child);
