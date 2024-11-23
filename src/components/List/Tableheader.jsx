//

import React from "react";
import { FaSearch } from "react-icons/fa"; // Import search icon
import { TfiExport } from "react-icons/tfi"; // Import export icon

const Tableheader = ({ title, columnHeaders, searchQuery, setSearchQuery }) => {
	return (
		<div className="bg-ground p-4 w-full text-primary-900 rounded-t-[10px]">
			{/* Wrapper with responsive flexbox */}
			<div className="flex items-center justify-between">
				{/* Title section */}
				<div className="text-secondary-0 text-2xl font-semibold text-center md:text-left w-full md:w-1/2 mb-4 md:mb-0">
					{title}
				</div>

				{/* Search bar and export button container */}
				<div className="flex items-center justify-end gap-4 w-[80%]">
					{/* Search bar with icon */}
					<div className="relative lg:w-96 sm:w-36">
						<span className="absolute inset-y-0 left-0 pl-3 flex items-center text-ground">
							<FaSearch />
						</span>
						<input
							type="text"
							placeholder="Search..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="w-full pl-10 px-2 py-1 text-ground bg-primary-50 border border-primary-200 rounded-[5px] focus:outline-none focus:ring focus:border-primary-300"
						/>
					</div>

					{/* Export button */}
					<button className="bg-green-600 text-white px-2 py-1 rounded-[5px] inline-flex items-center ">
						Export
						<TfiExport className="text-sm ml-2" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Tableheader;
