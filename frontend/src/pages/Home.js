import useDataFetch from "../hooks/useDataFetch";
import DevicesMap from "../components/DevicesMap";

const Home = () => {
  const { devicesData, isLoading } = useDataFetch();

  return (
    <div className="home">
      <DevicesMap devicesData={devicesData} />
    </div>
  );
};

export default Home;
