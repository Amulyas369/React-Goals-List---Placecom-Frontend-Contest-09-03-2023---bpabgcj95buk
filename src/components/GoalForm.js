import React, { useState } from "react";

const GoalForm = ({setAllGoalsProps,allGoalsProps}) => {
    const [formData, setFormData] = useState({
      goal: "",
      by: ""
    });
  const handleOnSubmit=(e)=>{
     e.prevent.default()
    setAllGoalsProps([...allGoalsProps,formData])
    setFormData({goal:"",by:""})
  }
    return (
      <>
        <h1>My Goals</h1>
        <form onSubmit={handleOnSubmit}>
          <input 
            type="text" 
            name='goal'
            value={value} 
            placeholder='Goal...' 
            onChange={e=>setFormData({...formData,name:e.target.value})}
          />
          <input 
            type="text"
            name="by"
            value={value}
            placeholder='By...'
            onChange={e=>setFormData({...formData,name:e.target.value})}
          />
          <button >Add</button>
        </form>
      </>
    )
}

export default GoalForm;