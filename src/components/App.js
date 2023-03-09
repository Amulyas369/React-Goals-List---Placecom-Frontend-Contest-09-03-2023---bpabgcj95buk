import React, { useState } from 'react'
import '../styles/App.css';
import GoalForm from './GoalForm';
import ListOfGoals from './ListOfGoals';

const App = () => {

  const [allGoals, setAllGoals] = useState([]);

  return (
    <div id="main">
      <GoalForm 
      setAllGoalsProps={setAllGoals}
      allGoalsProps={allGoals}/>
      <ListOfGoals
      allGoalsProps={allGoals} />
    </div>
  )
  
}


export default App;
