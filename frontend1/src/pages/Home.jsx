import React from 'react';
import { useAuthContext } from '../../context/AuthContextProvider';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const { user } = useAuthContext();

  if (!user || user.length === 0) {
    // Redirect to login if user data is not available
    return <Navigate to="/login" />;
  }

  const { last_name } = user[0]; // Access the last_name directly from user data
  const title = user[0].gender === 'Female' ? 'Mrs.' : 'Mr.';

  return (
    <div>
      <h1>Welcome Back, {title} {user[0].first_name}</h1>
      <h3>Please confirm your data {user[0].gender === 'Male' ? 'sir' : 'Ma'}</h3>
      <h5>id: {user[0].id}</h5>
      <h5>first_name: {user[0].first_name}</h5>
      <h5>last_name: {user[0].last_name}</h5>
      <h5>email: {user[0].email}</h5>
      <h5>gender: {user[0].gender}</h5>
      <h5>ip_address: {user[0].ip_address}</h5>
      {/* Render other user data here */}
    </div>
  );
};

export default Home;
