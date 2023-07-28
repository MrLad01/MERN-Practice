import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContextProvider';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const { last_name } = useParams();

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
  }, [last_name]); // Empty dependency array for the optimized useEffect


  if (!userData || userData.length === 0) {
    return <div>Loading...</div>;
  }

  const user = userData[0];
  const title = user.gender === "Female" ? "Mrs." : "Mr.";


  return (
    <div>
          <h1>Welcome Back, {title} {user.first_name}</h1>
          <h3>Please confirm your data {user.gender === "Male" ? "sir" : "Ma"}</h3>
          <h5>id: {user.id}</h5>
          <h5>first_name: {user.first_name}</h5>
          <h5>last_name: {user.last_name}</h5>
          <h5>email: {user.email}</h5>
          <h5>gender: {user.gender}</h5>
          <h5>ip_address: {user.ip_address}</h5>
          {/* Render other user data here */}
    </div>
  );
};

export default Home;
