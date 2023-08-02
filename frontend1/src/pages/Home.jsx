import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../../context/AuthContextProvider';
import { Navigate, useParams, useSearchParams } from 'react-router-dom';

const Home = () => {
  const { state } = useAuthContext();

  if (!state.user) {
    return <div>Loading...</div>;
  }

  const title = state.user.gender === 'Female' ? 'Mrs.' : 'Mr.';

  return (
    <div>
      <h1>Welcome Back, {title} {state.user.first_name}</h1>
      <h3>Please confirm your data {state.user.gender === 'Male' ? 'sir' : 'Ma'}</h3>
      <h5>id: {state.user.id}</h5>
      <h5>first_name: {state.user.first_name}</h5>
      <h5>last_name: {state.user.last_name}</h5>
      <h5>email: {state.user.email}</h5>
      <h5>gender: {state.user.gender}</h5>
      <h5>ip_address: {state.user.ip_address}</h5>
      {/* Render other user data here */}
    </div>
  );
};

export default Home;
