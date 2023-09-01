import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get("https://api.coinlore.net/api/tickers/");
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    return;
  }, []);

  return (
    <div className="App">
      {console.log(data)}
      <div className="w-[290px] sm:w-[550px] lg:w-[900px] xl:w-[1200px] mx-auto">
        <div className="">
          <table className="min-w-full overflow-x-scroll">
            <thead className="bg-white border-b">
              <tr>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Group Name
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  email
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Idea
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                ></th>
              </tr>
            </thead>
            {data ?
             data.map((data) => (
            <>
              <tbody>
                <tr
                  key={1}
                  className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{data.name}</td>
                  <td
                    key={2}
                    className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  ></td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"></td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"></td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"></td>
                  <td>
                    {/* <Link href={`/user/${user._id}`}>Detail</Link> */}
                  </td>
                </tr>
              </tbody>
            </>
             )) : <p>No record to display</p>} 
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
