import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const Calendar = ({selectedDay, setSelectedDay}) => {

  const handleDayClick = (day, { selected }) => {
    setSelectedDay(selected ? undefined : day);
  }

    return (
      <div>
        <DayPicker
          selectedDays={selectedDay}
          onDayClick={handleDayClick}
          disabledDays={{after: new Date()}}
        />
        <p>
          {selectedDay}
        </p>
      </div>
    );
};
export default Calendar