import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const People = () => {
  const { id } = useParams();
  const [starwars, setStarwars] = useState({});
  const [error, setError] = useState(false);

  const fetchData = () => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then(response => {
        setStarwars(response.data);
        setError(false);
      })
      .catch(err => {
        console.log(err);
        setError(true);
      });
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div style={{
      width: "700px",
      margin: "50px auto",
    }}>
      {error ? (
        <div>
          <p style={{
            color: "red",
            fontSize: "largest",
            fontWeight: "bold",
          }}>ERROR:</p>
          <h2>These aren't the droids you're looking for!</h2>
          <img
            src="https://images4.fanpop.com/image/photos/20300000/Old-Ben-obi-wan-kenobi-20375224-246-205.jpg"
            alt="Obi-Wan Kenobi"
          />
        </div>
      ) : (
        <div>
          <h1>{starwars.name}</h1>
          <p>Height: {starwars.height}</p>
          <p>Hair Color: {starwars.hair_color}</p>
          <p>Eye Color: {starwars.eye_color}</p>
          <p>Skin Color: {starwars.skin_color}</p>
        </div>
      )}
    </div>
  );
};

export default People;
