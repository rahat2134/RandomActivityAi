import React,{useState} from 'react'
import './RandomActivity.css';


function RandomActivity(){
    const [activityData,setActivityData]=useState(null);

// fetching the data

const fetchActivityData = async ()=>{
try{
    const response = await fetch(`https://www.boredapi.com/api/activity`); 
    // getting the data
    const data =await response.json();
    // setting the data in useState hook
    setActivityData(data);   
}catch(e){
console.log('Error fetching data:', e);
}
};
// main jsx work now

return (
    // make a box
    <div className='random-activity-container'>
        <h1>Random Activity Generator</h1>
        {/* make a button */}
        <button onClick={fetchActivityData}>Get Random Activity</button>
        {/* If activityData is truthy, it proceeds to render the content inside the parentheses. If activityData is falsy (e.g., null, undefined, false), it skips rendering the content. */}
        {activityData && (
            <div className='activity-details'>
                {/* i.e taking the data from useState variable activityData whose work is to store the data */}
                <p>Type : {activityData.type}</p>
                <p>Activity : {activityData.activity}</p>
            </div>
        )}
    </div>
  );
}

// export the data
export default RandomActivity;

