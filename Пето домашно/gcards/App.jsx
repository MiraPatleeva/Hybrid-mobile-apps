import React, { useState } from 'react'
import Form from './Components/Form';
import CardList from './Components/CardsList';

function App() {
  const [profiles, setProfiles] = useState([]);
  const addNewProfile = (profileData) => {
    setProfiles((profiles) => [profileData, ...profiles])
  };

  return(
    <>
    <Form onSubmit={addNewProfile} />
    <CardList profiles={profiles} />
    </>
  );
}

export default App;