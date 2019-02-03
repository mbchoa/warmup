import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

import Card from './Card';

import '../styles/workouts.scss';

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
      <h1 className="workouts__header">workouts</h1>
      <div className="workouts__content">
        {workouts && workouts.map(({ created_at, exercises }) => (
          <div className="workouts__log">
            <Card>
              <h5 className="workouts__day-of-week">
                {format(created_at, 'ddd')}
              </h5>
              <h1 className="workouts__date">
                {format(created_at, 'MMMM Wo')}
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
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Workouts;
