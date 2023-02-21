import { useEffect, useState } from 'react';

function useWeatherSearch(query) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();

    async function fetchWeatherData() {
      setLoading(true);
      let responseBody = {};

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=254c7ba8581047747886beceea397649`,
          { signal: controller.signal }
        );

        if (response.status !== 200) {
          setError(true);
        } else {
          setError(false);
          responseBody = await response.json();
        }
      } catch (e) {
        if (e instanceof DOMException) {
          console.log("HTTP request cancelled");
        } else {
          setError(true);
          console.error("Error:", e);
          throw e;
        }
      }

      if (!ignore) {
        // Group data by day and take the first data point for each day
        const groupedData = responseBody.list.reduce((acc, data) => {
          const date = data.dt_txt.split(' ')[0];
          if (!acc[date]) {
            acc[date] = data;
          }
          return acc;
        }, {});

        // Convert the grouped data back to an array
        const filteredData = Object.values(groupedData);

        setData(filteredData);
        setLoading(false);
      }
    }

    if (query) {
      fetchWeatherData();
    }

    return () => {
      ignore = true;
      controller.abort();
    };
  }, [query]);

  return [data, loading, error];
}

export default useWeatherSearch;