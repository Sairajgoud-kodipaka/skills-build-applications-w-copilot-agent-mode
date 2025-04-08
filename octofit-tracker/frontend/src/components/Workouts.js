import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://zany-fishstick-x5vqw6r6r94xh6j7g-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="card">
      <h2 className="card-title">Workouts</h2>
      <ul className="list-group">
        {workouts.map(workout => (
          <li key={workout.id} className="list-group-item">
            <strong>{workout.name}</strong>: {workout.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;
