import axios from "axios";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Table from "./component/table";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

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

  const handleClick = (e) => {
    setQuery(e.target.value);
    //search();
  };

  const search = (data) => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.id.toLowerCase().includes(query.toLowerCase())
    );

    //setData(searchData);
  };

  return (
    <div className="App">
      <div className="mb-3 grid grid-cols-3">
        <div className="col-span-2 flex ">
          <h5 className="m-4">header</h5>
          <p className="m-4 hidden md:flex">sub header</p>
          <div className="m-4 w-[70%] mb-4 flex md:w-[50%]">
            <CiSearch className="absolute text-neutral-500 top-[32px]" />
            <input
              type="search"
              className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent px-5 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none "
              placeholder="Search"
              onChange={handleClick}
            />
          </div>
        </div>
        <div className="m-4 hidden md:flex">delete</div>
      </div>
      <Table results={search(data)} />
      {/* <Table results={data}/> */}

      {/* {console.log(data)} */}

      {/* {console.log(search(data))} */}

      {/* <div className="w-[550px] lg:w-[900px] xl:w-[1200px] mx-auto">
      {data ? (<table className="min-w-full overflow-x-scroll">
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
         
           {data.map((data) => (
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
            ))}
          
        </table>) : (
          <p>No record to display</p>
        )}
      </div> */}
    </div>
  );
}

export default App;
