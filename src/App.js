import React, { useState } from 'react';
import { eachDayOfInterval } from "date-fns";
import Day from './Day'


function App() {
  const [dates, setDates] = useState(eachDayOfInterval({
    start: new Date(2020, 3, 1),
    end: new Date(2020, 3, 30)
  }))
  console.log(dates)
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {dates.map((date) => {
        return <Day key={date} date={date} />
      })}

    </div>
  );
}

export default App;
