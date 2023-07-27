import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {
  const { last_name } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/user/${last_name}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const userData = await response.json();
        setUserData(userData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [userData]);
  


  return (
    <div>
      {userData ? (
        <>
          <h1>Welcome Back, {userData[0].gender == "Female" ? "Mrs." : "Mr."}{userData[0].first_name}</h1>
          <h3>Please confirm your data {userData[0].gender == "Male" ?"sir":"Ma"}</h3>
          <h5>id: {userData[0].id}</h5>
          <h5>first_name: {userData[0].first_name}</h5>
          <h5>last_name: {userData[0].last_name}</h5>
          <h5>email: {userData[0].email}</h5>
          <h5>gender: {userData[0].gender}</h5>
          <h5>ip_address: {userData[0].ip_address}</h5>
          {/* Render other user data here */}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Home;
