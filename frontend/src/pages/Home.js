import { useEffect, useState } from "react";
import useDataFetch from "../hooks/useDataFetch";
import DevicesMap from "../components/DevicesMap";
import axios from "axios";

const Home = () => {
  //const [devicesData, setDevicesData] = useState([]);

  const { devicesData, isLoading } = useDataFetch();

  // useEffect(() => {
  //   const getDevicesData = async () => {
  //     try {
  //       const res = await axios.get("/devices");
  //       //console.log(res.data);
  //       setDevicesData(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getDevicesData();
  // }, []);

  return (
    <div className="home">
      <DevicesMap devicesData={devicesData} />
    </div>
  );
};

export default Home;
