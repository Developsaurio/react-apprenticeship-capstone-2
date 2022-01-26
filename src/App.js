import React, { useState, useEffect } from "react";
import useFormat from "./resources/date";
import { format } from "date-fns";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Error from "./pages/Error";
import { fetchData } from "./resources/api";

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const initialDate = format(new Date(), "yyyy-MM-dd");
  const [date, setDate] = useState(initialDate);
  let selected = useFormat(date);

  useEffect(() => {
    const loadData = async () => {
      const dataImg = await fetchData(selected);
      setData(dataImg);
    };
    loadData();
    setIsLoading(false);
  }, [selected]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={data}
              isLoading={isLoading}
              selected={selected}
              setDate={setDate}
            />
          }
        />
        <Route path="/404" element={<Error />} />
        <Route path="*" to="/404" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
