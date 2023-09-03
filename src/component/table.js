import React from "react";
import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

function Table({ results }) {
  // const [att, setAtt] = useState(true);

  const [id, setId] = useState(true);
  const [name, setName] = useState(true);
  const [rank, setRank] = useState(true);
  const [price, setPrice] = useState(true);
  const [percent, setPercent] = useState(true);
  const [priceBtc, setPriceBtc] = useState(true);
  const [marketUsd, setMarketUsd] = useState(true);

  // sort by id
  const handleSortId = (att, val) => {
    if (val === "id") {
      setId(!att);
    } else if (val === "rank") {
      setRank(!att);
    } else if (val === "price_usd") {
      setPrice(!att);
    } else if (val === "percent_change_24h") {
      setPercent(!att);
    } else if (val === "price_btc") {
      setPriceBtc(!att);
    } else if (val === "market_cap_usd") {
      setMarketUsd(!att);
    }
    if (att === true) {
      results.sort((a, b) => Number(a[val]) - Number(b[val]));
    } else {
      results.sort((a, b) => Number(b[val]) - Number(a[val]));
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

  //sort by rank
  const handleRankId = () => {
    setRank(!rank);
    if (rank === true) {
      results.sort((a, b) => Number(a.rank) - Number(b.rank));
    } else {
      results.sort((a, b) => Number(b.rank) - Number(a.rank));
    }
  };

  //sort by price
  const handlePriceId = () => {
    setPrice(!price);
    if (price === true) {
      results.sort((a, b) => Number(a.price_usd) - Number(b.price_usd));
    } else {
      results.sort((a, b) => Number(b.price_usd) - Number(a.price_usd));
    }
  };

  //sort by percent
  const handlePercentId = () => {
    setPercent(!percent);
    if (percent === true) {
      results.sort((a, b) => Number(a.price_usd) - Number(b.price_usd));
    } else {
      results.sort((a, b) => Number(b.price_usd) - Number(a.price_usd));
    }
  };

  return (
    <>
      <div className="w-[550px] md:w-[900px] xl:w-[1200px] mx-auto">
        {results.length !== 0 ? (
          <table className="w-[550px] md:w-[900px] xl:w-[1200px] mx-auto min-w-full overflow-x-scroll">
            <thead className="bg-white border-b">
              <tr>
                <th
                  scope="col"
                  className=" flex text-sm font-medium text-gray-900 px-4 py-6 text-left"
                >
                  Id
                  <span className="pl-1 pt-1 text-blue-400">
                    {id ? (
                      <AiOutlineArrowDown
                        onClick={() => handleSortId(id, "id")}
                      />
                    ) : (
                      <AiOutlineArrowUp
                        onClick={() => handleSortId(id, "id")}
                      />
                    )}
                  </span>
                </th>
                <th
                  scope="col"
                  className="h-[10px] text-sm font-medium text-gray-900 py-4 text-left"
                >
                  <span className="flex px-2">
                    Name
                    <span className="pt-1 pl-1 text-blue-400">
                      {name ? (
                        <AiOutlineArrowDown onClick={handleSortName} />
                      ) : (
                        <AiOutlineArrowUp onClick={handleSortName} />
                      )}
                    </span>
                  </span>
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 py-4 text-left"
                >
                  <span className="flex">
                    Rank
                    <span className="pl-1 pt-1 text-blue-400">
                      {rank ? (
                        <AiOutlineArrowDown
                          onClick={() => handleSortId(rank, "rank")}
                        />
                      ) : (
                        <AiOutlineArrowUp
                          onClick={() => handleSortId(rank, "rank")}
                        />
                      )}
                    </span>
                  </span>
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-2 py-4 text-left"
                >
                  <span className="flex">
                    Price(USD)
                    <span className="pl-1 pt-1 text-blue-400">
                      {price ? (
                        <AiOutlineArrowDown
                          onClick={() => handleSortId(price, "price_usd")}
                        />
                      ) : (
                        <AiOutlineArrowUp
                          onClick={() => handleSortId(price, "price_usd")}
                        />
                      )}
                    </span>
                  </span>
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-2 py-4 text-left"
                >
                  <span className="flex justify-center items-center">
                    Percent Change(24h)
                    <span className=" text-blue-400">
                      {percent ? (
                        <AiOutlineArrowDown
                          onClick={() =>
                            handleSortId(percent, "percent_change_24h")
                          }
                        />
                      ) : (
                        <AiOutlineArrowUp
                          onClick={() =>
                            handleSortId(percent, "percent_change_24h")
                          }
                        />
                      )}
                    </span>
                  </span>
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-2 py-4 text-left"
                >
                  <span className="flex items-center justify-start">
                    Price(BTC)
                    <span className=" text-blue-400">
                      {priceBtc ? (
                        <AiOutlineArrowDown
                          className="ml-2"
                          onClick={() => handleSortId(priceBtc, "price_btc")}
                        />
                      ) : (
                        <AiOutlineArrowUp
                          className="ml-2"
                          onClick={() => handleSortId(priceBtc, "price_btc")}
                        />
                      )}
                    </span>
                  </span>
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-2 py-4 text-left"
                >
                  <span className="flex items-center justify-start">
                    Market Cap(USD)
                    <span className=" text-blue-400 w-3">
                      {marketUsd ? (
                        <AiOutlineArrowDown
                          className=""
                          onClick={() =>
                            handleSortId(marketUsd, "market_cap_usd")
                          }
                        />
                      ) : (
                        <AiOutlineArrowUp
                          onClick={() =>
                            handleSortId(marketUsd, "market_cap_usd")
                          }
                        />
                      )}
                    </span>
                  </span>
                </th>
              </tr>
            </thead>

            {results.map((result, index) => (
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
                  <td className="text-sm text-gray-900 font-light px-2 py-4 w-36">
                    {result.market_cap_usd}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        ) : (
          <p>No record to display</p>
        )}
      </div>
    </>
  );
}

export default Table;
