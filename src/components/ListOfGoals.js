import React from "react";

const ListOfGoals = ({allGoalsProps}) => {
    return (
      <ul>
        {allGoalsProps.length>0 ? (
          <>
          {
             allGoalsProps.map((goal,inedx)=>(
          <li key={index}>
            <p>My goal is to {goal.goal}, by {goal.by}.</p>
          </li>
             ))}
             </>
        ):null
             }
      </ul>
    );
}

export default ListOfGoals;