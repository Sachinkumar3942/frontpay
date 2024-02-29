import React from 'react'

const SortFolder = ({onSort}) => {
	// const [sortType,setSortType]=useState("recent");
  return (
		<div className='mb-2  mt-3 flex justify-center lg:justify-end'>
			<button
				type='button'
				onClick={()=>onSort("recent")}
				className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass hover:bg-transparent hover:border-white`}
			>
				Most Recent
			</button>
			<button
				type='button'
				onClick={()=>onSort("stars")}
				className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass hover:border-white`}
			>
				Most Stars
			</button>
			<button
				type='button'
				onClick={()=>onSort("forks")}
				className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass hover:border-white`}
			>
				Most Forks
			</button>
		</div>
	);
}

export default SortFolder