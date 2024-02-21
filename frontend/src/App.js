import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Devices from "./pages/Devices";
import DeviceDetail from "./pages/DeviceDetail";
import DeviceForm from "./pages/DeviceForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/devices/:id" element={<DeviceDetail />} />
            <Route path="/device/new" element={<DeviceForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
