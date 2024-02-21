import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DeviceForm = () => {
  const [name, setName] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitud, setLongitud] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Lets prevent the default action of the event. In this case, refresh the page.

    const device = {
      name,
      mobile_number: mobilenumber,
      latitude,
      longitud,
      last_connection: new Date(),
    };

    try {
      const response = await axios.post("/devices", device);

      if (!response.ok) {
        console.log("Error adding a new device.");
      } else {
        setName("");
        setMobilenumber("");
        setLatitude("");
        setLongitud("");
        console.log("New device added", response.data);
      }
    } catch (err) {
      console.log(err);
    }

    navigate("/devices");
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Device</h3>
      <label>Device Name:</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        /* We set the title based on the value of the target of the event */
        value={
          name
        } /* We set a two way data binding, so that if the title changes from outside the form, it will be reflected on the form as well */
      />
      <label>Mobile number:</label>
      <input
        type="text"
        onChange={(e) => setMobilenumber(e.target.value)}
        value={mobilenumber}
      />
      <label>Latitude:</label>
      <input
        type="text"
        onChange={(e) => setLatitude(e.target.value)}
        value={latitude}
      />
      <label>Longitud:</label>
      <input
        type="text"
        onChange={(e) => setLongitud(e.target.value)}
        value={longitud}
      />
      <button className="btn">Add Device</button>
    </form>
  );
};

export default DeviceForm;
