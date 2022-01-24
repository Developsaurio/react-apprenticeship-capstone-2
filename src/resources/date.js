import { useState, useEffect } from "react";
import { format } from "date-fns";

const useFormat = (date) => {
  const initialDate= format(new Date(), 'yyyy-MM-dd')

  const [newDate, setNewDate] = useState(initialDate);

  useEffect(() => {
    if (!!date) {
      setNewDate(format(new Date(date), 'yyyy-MM-dd'));
    }
  }, [date]);

  return newDate;
};

export default useFormat;
