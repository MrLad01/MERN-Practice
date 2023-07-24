import React from 'react'

const Home = ({last_name}) => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Make an API request to fetch user data by ID
        const response = await fetch(`/api/users/${last_name}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        // Handle errors...
        console.error(error);
      }
    };

    fetchUser();
  }, [last_name]);

  console.log('User profile: ', user);

  return (
    <div>
      {/* Display user profile data here */}
      {user && <p>Hello, {user.name}!</p>}
    </div>
  );
}

export default Home
