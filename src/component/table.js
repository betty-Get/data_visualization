import React from 'react'

function Table({results}) {
    
    // sort number
    //  let x = results.sort( (a,b) => Number(a.id) - Number(b.id));
    // console.log(x)
    
    //sort name
    // let y = results.sort((a,b) => a.name.localeCompare(b.name));
    // console.log(y);

  return (
    <>

<div className="w-[550px] lg:w-[900px] xl:w-[1200px] mx-auto">
      {results ? (<table className="min-w-full overflow-x-scroll">
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
         
           {results.map((result,index) => (
                <tbody key={index}>
                  <tr
                    className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                  >
                    <td className="px-4 py-4  text-sm font-medium text-gray-900">
                      {result.id}
                    </td>
                    <td className="text-sm text-gray-900 font-light py-4">
                      {result.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-4 ">
                      {result.rank}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-4 ">
                      {result.price_usd}
                    </td>
                    <td className="text-sm text-gray-900 font-light py-2 ">
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
             
            ))}
          
        </table>) : (
          <p>No record to display</p>
        )}
      </div>
      
    </>
  )
}

export default Table
