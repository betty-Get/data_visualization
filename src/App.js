import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./component/table";
import Navbar from "./component/navbar";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}`);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    return;
  }, []);

  const handleClick = (e) => {
    setQuery(e.target.value);
  };

  const search = (data) => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.id.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div className="App">
      <Navbar handleClick={handleClick} />
      <Table results={search(data)} />
    </div>
  );
}

export default App;
