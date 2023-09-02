import React from "react";
import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

function Table({ results }) {
  const [id, setId] = useState(true);
  const [name, setName] = useState(true);
  const [rank, setRank] = useState(true);

  // sort by id
  const handleSortId = () => {
    setId(!id);
    // const keys = ["id", "rank"];
    if (id === true) {
      //   results.sort((a, b) =>
      //     keys.some((key) => Number(a[key]) - Number(b[key]))
      //   );
      results.sort((a, b) => Number(a.id) - Number(b.id));
    } else {
      results.sort((a, b) => Number(b.id) - Number(a.id));
    }
  };

  //sort name
  const handleSortName = () => {
    setName(!name);
    if (name === true) {
      results.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      results.sort((a, b) => b.name.localeCompare(a.name));
    }
  };

  const handleRankId = () => {
    setRank(!rank);

    if (rank === true) {
      results.sort((a, b) => Number(a.rank) - Number(b.rank));
    } else {
      results.sort((a, b) => Number(b.rank) - Number(a.rank));
    }
  };

  return (
    <>
      <div className="w-[550px] md:w-[900px] xl:w-[1200px] mx-auto">
        {results ? (
          <table className="w-[550px] md:w-[900px] xl:w-[1200px] mx-auto min-w-full overflow-x-scroll">
            <thead className="bg-white border-b">
              <tr>
                <th
                  scope="col"
                  className=" flex text-sm font-medium text-gray-900 px-4 py-6 text-left"
                >
                  Id
                  <span className="pl-1 pt-1 text-neutral-500">
                    {id ? (
                      <AiOutlineArrowDown onClick={handleSortId} />
                    ) : (
                      <AiOutlineArrowUp onClick={handleSortId} />
                    )}
                  </span>
                </th>
                <th
                  scope="col"
                  className="h-[10px] text-sm font-medium text-gray-900 py-4 text-left"
                >
                  <div className="flex px-2">
                    Name
                    <span className="pt-1 pl-1 text-neutral-500">
                      {name ? (
                        <AiOutlineArrowDown onClick={handleSortName} />
                      ) : (
                        <AiOutlineArrowUp onClick={handleSortName} />
                      )}
                    </span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 py-4 text-left"
                >
                  <div className="flex">
                    Rank
                    <span className="pl-1 pt-1 text-neutral-500">
                      {rank ? (
                        <AiOutlineArrowDown onClick={handleRankId} />
                      ) : (
                        <AiOutlineArrowUp onClick={handleRankId} />
                      )}
                    </span>
                  </div>
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

            {results.length === 0 ? (
              <p>No matching data</p>
            ) : (
              results.map((result, index) => (
                <tbody key={index}>
                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td className="px-4 py-4  text-sm font-medium text-gray-900">
                      {result.id}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-4 w-32">
                      {result.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-4 ">
                      {result.rank}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-4 ">
                      {result.price_usd}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-2 w-32">
                      {result.percent_change_24h}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-4 ">
                      {result.price_btc}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-4 ">
                      {result.market_cap_usd}
                    </td>
                  </tr>
                </tbody>
              ))
            )}
          </table>
        ) : (
          <p>No record to display</p>
        )}
      </div>
    </>
  );
}

export default Table;
