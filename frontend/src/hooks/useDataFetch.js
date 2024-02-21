import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const useDataFetch = () => {
  const [devicesData, setDevicesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getDevicesData = useCallback(async () => {
    setIsLoading(true);

    try {
      const res = await axios.get("/devices");
      //console.log("fetching data...");
      setDevicesData(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getDevicesData();
  }, [getDevicesData]);

  return { devicesData, isLoading };
};

export default useDataFetch;
