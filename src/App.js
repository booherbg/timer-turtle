import './App.css';
import { useState, useEffect } from 'react';
import ActivityForm from './ActivityForm';
import Activities from './Activities';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
function App() {
  const [activities, setActivities] = useState([]);
  const [running, setRunning] = useState(false);

  const addActivity = (name, time) => {
    setActivities([...activities, {name, time, current: time}])
  }

  // runs every second to decrease the first active activity by 1 second
  const tick = () => {
    if (running && activities.length > 0) {
      const firstActivity = activities.find(a => a.current > 0);
      if (firstActivity) {
        firstActivity.current -= 1;
        setActivities([...activities])
      }
    }
  }

  const resetActivities = () => {
    setActivities(activities.map(activity => ({...activity, current: activity.time})));
  }

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);
    return () => clearInterval(interval);
  })
  return (
    <Container className='p-3 rounded mt-3'>
      <h1 className='text-center'>🐢 Timer Turtle 🐢</h1>
      <ActivityForm addActivity={addActivity} />
      <hr/>
      <Activities 
        activities={activities} 
        setRunning={setRunning} 
        running={running} 
        resetActivities={resetActivities} 
      />
    </Container>
  );
}

export default App;
