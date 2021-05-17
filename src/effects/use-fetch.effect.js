import { useState, useEffect } from "react";

const useFetchArrayWithUrl = (url) => {
  console.log("useFetch is running");

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const resArray = await res.json();
      setData(resArray[0]);
    };

    fetchData();
  }, [url]);

  return data;
};

export default useFetchArrayWithUrl;
