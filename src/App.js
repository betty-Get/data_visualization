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
      <div className="w-[550px] lg:w-[900px] xl:w-[1200px] mx-auto">
        <table className="min-w-full overflow-x-scroll">
          <thead className="bg-white border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-4 py-4 text-left"
              >
                Id
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 py-4 text-left"
              >
                Name
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-2 py-4 text-left"
              >
                Rank
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-2 py-4 text-left"
              >
                Price(USD)
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-2 py-4 text-left"
              >
                Percent Change(24h)
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-2 py-4 text-left"
              >
                Price(BTC)
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-2 py-4 text-left"
              >
                Market Cap(USD)
              </th>
            </tr>
          </thead>
          {data ? (
            data.map((data) => (
              <>
                <tbody>
                  <tr
                    key={data.id}
                    className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                  >
                    <td className="px-4 py-4  text-sm font-medium text-gray-900">
                      {data.id}
                    </td>
                    <td className="text-sm text-gray-900 font-light py-4">
                      {data.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-4 ">
                      {data.rank}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-4 ">
                      {data.price_usd}
                    </td>
                    <td className="text-sm text-gray-900 font-light py-2 ">
                      {data.percent_change_24h}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-4 ">
                      {data.price_btc}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-4 ">
                      {data.market_cap_usd}
                    </td>
                  </tr>
                </tbody>
              </>
            ))
          ) : (
            <p>No record to display</p>
          )}
        </table>
      </div>
    </div>
  );
}

export default App;
