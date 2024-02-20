import { useState } from 'react';

function getTodayFormatted() {
  const today = new Date();
  const year = today.getFullYear();
  let day = today.getDay().toString();
  let month = today.getMonth() + 1;
  let monthString = '';

  if (day.length == 1) {
    day = '0' + day.toString();
  }

  if (month < 10) {
    monthString = '0' + month.toString();
  }

  return `${day}/${monthString}/${year}`;
}

export default function Header() {
  const [currentDate, setCurrentDate] = useState(getTodayFormatted());

  return (
    <div className="flex justify-start pl-4 py-4">
      <div className="text-white text-2xl ">Today {currentDate}</div>
    </div>
  );
}
