import { FaCodeBranch, FaCopy, FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { formatMemberSince } from "../utils/function";
import toast from "react-hot-toast";
const Repo = ({repo}) => {
	const releasedOn=formatMemberSince(repo?.created_at);
	const handleClone=async(repo)=>{
		try{
			await navigator.clipboard.writeText(repo.clone_url) 
			toast.success("Url copied!")
		}catch(error){
            toast.error("Unable to copy")
		}
	}
	return (
		<li className='mb-10 w-full ms-7'>
			<span
				className='absolute flex items-center justify-center w-6 h-6 bg-blue-100
			rounded-xl -start-3  ring-8 ring-white'
			>
				<FaCodeBranch className='w-5 h-5 text-blue-800' />
			</span>
			<div className='flex gap-2 items-center flex-wrap'>
				<a
					href={repo?.html_url}
					target='_blank'
					rel='noreferrer'
					className='flex items-center gap-2 text-lg font-semibold'
				>
					{repo?.name}
				</a>
				<span
					className='bg-orange-300 text-black text-xs font-medium px-2.5
					py-0.5 rounded-full flex items-center gap-1'
				>
					<FaRegStar /> {repo?.stargazers_count}
				</span>
				<span
					className='bg-pink-300 text-pink-800 text-xs font-medium
					 px-2.5 py-0.5 rounded-full flex items-center gap-1'
				>
					<FaCodeFork /> {repo?.forks_count}
				</span>
				<span
				    onClick={()=>handleClone(repo)}
					className='cursor-pointer bg-green-100 text-green-800 text-xs
					font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1'
				>
					<FaCopy /> Clone
				</span>
			</div>

			<time
				className='block my-1 text-xs font-normal leading-none
			 text-gray-400'
			>
				Released on {releasedOn}
			</time>
			<p className='mb-4 text-base font-normal text-gray-500'>{repo.description?repo.description.slice(0, 500):"No description provided"}</p>
			<img src={`/${repo?.language}.svg`} alt='No Programming language Specified' className='h-12' />
		</li>
	);
};
export default Repo