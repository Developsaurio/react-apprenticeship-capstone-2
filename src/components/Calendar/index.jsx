import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './styles.css';

const Calendar = ({selectedDay, setSelectedDay, loading}) => {

  const handleDayClick = (day, modifiers = {}) => {
    if (modifiers.disabled) {
      return alert("Sorry but right now, I can't travel to the future. Try again");
    }
    setSelectedDay(modifiers.selected ? undefined : day);
  }

    return (
        <DayPicker
          selectedDays={selectedDay}
          onDayClick={handleDayClick}
          calendarClassName={loading ? "loading" : ""}
          toMonth={new Date()}
          disabledDays={{after: new Date()}}
        />
    );
};
export default Calendar