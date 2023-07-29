import React, { useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContextProvider';
import { Navigate, useParams } from 'react-router-dom';

const Home = () => {
  const { user } = useAuthContext();
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

    if (!user) {
      fetchUserData();
    }
  }, []); //

  if (!userData || userData.length === 0) {
    return <div>Loading...</div>;
  }

  const title = userData[0].gender === 'Female' ? 'Mrs.' : 'Mr.';

  return (
    <div>
      <h1>Welcome Back, {title} {userData[0].first_name}</h1>
      <h3>Please confirm your data {userData[0].gender === 'Male' ? 'sir' : 'Ma'}</h3>
      <h5>id: {userData[0].id}</h5>
      <h5>first_name: {userData[0].first_name}</h5>
      <h5>last_name: {userData[0].last_name}</h5>
      <h5>email: {userData[0].email}</h5>
      <h5>gender: {userData[0].gender}</h5>
      <h5>ip_address: {userData[0].ip_address}</h5>
      {/* Render other user data here */}
    </div>
  );
};

export default Home;
