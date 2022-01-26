const NASA_URL = "https://api.nasa.gov/planetary/apod";
const KEY = "p6pWJpQEPAfcfezyNmh4Ru5Bt9onXU4Fb42QXAWa";

export const fetchData = async (selected) => {
  let url = `${NASA_URL}?api_key=${KEY}&date=${selected}`;

  try {
    const response = await fetch(url);
    const dataImg = await response.json();
    return dataImg;
  } catch (e) {
    return e;
  }
};
