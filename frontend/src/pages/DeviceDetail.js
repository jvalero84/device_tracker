import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DeviceDetail = () => {
  const [device, setDevice] = useState("");

  let { id } = useParams();

  useEffect(() => {
    const getDeviceData = async () => {
      try {
        const res = await axios.get(`/devices/${id}`);
        setDevice(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getDeviceData();
  }, []);

  return (
    <div className="container">
      <h4>ID: {device.id}</h4>
      <p>
        <strong>Device model: </strong>
        {device.name}
      </p>
      <p>
        <strong>Mobile number: </strong>
        {device.mobile_number}
      </p>
      <p>
        <strong>Latitude: </strong>
        {device.latitude}
      </p>
      <p>
        <strong>Longitud: </strong>
        {device.longitud}
      </p>
      <p>
        <strong>Last Seen: </strong>
        {device.last_connection}
      </p>
    </div>
  );
};

export default DeviceDetail;
