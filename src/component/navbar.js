import { CiSearch } from "react-icons/ci";
import {
  RiDeleteBin6Line,
  RiDownloadCloud2Line,
  RiFilter3Fill,
} from "react-icons/ri";

function Navbar({ handleClick }) {
  return (
    <div className="mb-3 grid grid-cols-3">
      <div className="col-span-3 lg:col-span-2 flex items-center">
        <h5 className="m-4 font-serif">
          Data <span className="text-blue-700">Visualization</span>
        </h5>

        <div className="mt-4 ml-4  mb-4 flex  ">
          <CiSearch className="absolute text-neutral-500 top-[36px] z-10" />
          <input
            // type="search"
            className="h-8 relative block  flex-auto  rounded border border-solid bg-white drop-shadow-xl bg-transparent px-5 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none "
            placeholder="Search"
            onChange={handleClick}
          />
        </div>
      </div>
      <div className="m-4 hidden lg:flex items-center justify-center">
        <div className="flex">
          <span className="mt-[7px] pr-1 text-red-500">
            <RiDeleteBin6Line />
          </span>
          Delete
        </div>
        <div className="ml-5 flex">
          <span className="mt-[7px] pr-1 text-blue-500">
            <RiFilter3Fill />
          </span>
          filters
        </div>
        <div className="border-[1px] rounded-lg p-2 ml-4 flex">
          <span className="mt-[7px] pr-1 text-blue-500">
            <RiDownloadCloud2Line />
          </span>
          Export
        </div>
        <button className="border-1 rounded-lg border-blue-500 bg-blue-500 py-2 px-3 ml-4 flex">
          <span className="mt-[7px] pr-1 text-white">
            <RiDownloadCloud2Line />
          </span>
          Add
        </button>
      </div>
    </div>
  );
}

export default Navbar;
