import Repo from "./Repo";

const Repos = ({repos}) => {
	return (
		<div className={`lg:w-2/3 w-full bg-glass rounded-lg px-8 py-6`}>
			<ol className='relative border-s w-full border-gray-200'>
				{
					repos.map(repo=>(
						<Repo repo={repo}/>
					))
				}
			</ol>
			{repos.length === 0 && "No repositories yet"}
		</div>
	);
};

export default Repos