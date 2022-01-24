import { useState, useEffect } from "react";
import { format } from "date-fns";

const useFormat = (date) => {
  const [newDate, setNewDate] = useState(date);

  useEffect(() => {
    if (!!date) {
      setNewDate(format(new Date(date), 'yyyy-MM-dd'));
    }
  }, [date]);

  return newDate;
};

export default useFormat;
