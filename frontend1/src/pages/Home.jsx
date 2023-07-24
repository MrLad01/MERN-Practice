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
  }, [last_name]);

  return (
    <div>
      {userData ? (
        <>
          <h1>Welcome {userData.name}</h1>
          {/* Render other user data here */}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Home;
