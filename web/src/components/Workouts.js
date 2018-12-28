import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);

  function handleWorkoutsJson(workouts) {
    setWorkouts(workouts)
  }

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/workouts/')
      .then(res => res.json())
      .then(handleWorkoutsJson)
  }, [])

  return (
    <div className="workouts">
      {workouts && workouts.map(({ created_at, exercises }) => (
        <div className="workouts__instance">
          <h1 className="workouts__instance-date">
            {format(created_at, 'MMMM D YYYY')}
          </h1>
          <hr />
          {exercises && exercises.map(({ type, warmup_sets, work_sets }) => (
            <div className="workouts__exercises">
              <h2 className="workouts__exercise-type">
                {type}
              </h2>
              <div className="workouts__exercise-sets">
                {warmup_sets && warmup_sets.map(({ weight, reps }) => (
                  <div className="workouts__exercise-set">
                    {reps} x {weight} lbs
                  </div>
                ))}
              </div>
              <div className="workouts__exercise-sets">
                {work_sets && work_sets.map(({ weight, reps }) => (
                  <div className="workouts__exercise-set">
                    {reps} x {weight} lbs
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      ))}
    </div>
  )
};

export default Workouts;
